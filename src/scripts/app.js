/* eslint no-useless-escape: 0 no-control-regex: 0 */

const isEmail = (str) =>
  /.+\@.+\..+/.test(str)

$(document).ready(() => {
  const validateForm = formData => {
    let err = []
    let count = 0

    $.each(formData, (i, el) => {
      if (el.value === '' || undefined === el.value || el.value === null) {
        err[count] = el.name
        count++
      }

      if (el.name === 'email' && !isEmail(el.value)) {
        err[count] = `not is ${el.name}`
      }
    })

    return !(err.length > 0)
  }

  $('[data-sendform]').submit(function (e) {
    e.preventDefault()

    const $form = $(this)
    const formData = $form.serializeArray()

    if (validateForm(formData)) {
      $.ajax({
        url: $form.attr('action'),
        method: $form.attr('method'),
        data: $form.serialize(),
        dataType: 'json'
      }).done(() => {
        $form.removeClass('form--error')
        $form.addClass('form--success')
      }).fail(e => {
        $form.removeClass('form--success')
        $form.addClass('form--error')
      })
    } else {
      $form.addClass('form--error')
    }
  })
})
