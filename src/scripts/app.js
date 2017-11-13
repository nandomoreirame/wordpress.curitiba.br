$(document).ready(() => {
  $('[data-sendform]').submit(function (e) {
    e.preventDefault()

    const $form = $(this)
    const method = $form.attr('method')
    const url = $form.attr('action')
    const $email = $form.find('[name="email"]')
    const email = $email.val()

    $.ajax({
      url,
      method,
      data: { email },
      dataType: 'json'
    }).done(() => {
      $form.addClass('form--success')
      $email.attr('value', '')
    }).fail(e => {
      console.error(e)
    })
  })
})

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('sw.js')
//     .then(registration => {
//       console.log('offline worker registered!')
//     })
// }
