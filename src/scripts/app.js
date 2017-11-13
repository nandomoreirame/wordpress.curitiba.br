$(document).ready(() => {
  $('[data-sendform]').submit(function (e) {
    e.preventDefault()

    const $form = $(this)
    const method = $form.attr('method')
    const url = $form.attr('action')
    const data = $form.serialize()
    const $email = $form.find('[name="email"]')
    const _email = $email.val()

    if (_email !== '' && _email !== undefined && _email !== null) {
      $.ajax({
        url,
        method,
        data,
        dataType: 'json'
      }).done(() => {
        $form.addClass('form--success')
      }).fail(e => {
        console.error(e)
        $form.addClass('form--error')
      })
    } else {
      $form.addClass('form--error')
    }
    $email.val('').focus()
  })
})
