$(document).ready(() => {
  $('[data-sendform]').submit(function (e) {
    e.preventDefault()

    const $form = $(this)
    const _method = $form.attr('method')
    const _action = $form.attr('action')
    const _data = $form.serialize()

    $.ajax({
      url: _action,
      method: _method,
      data: _data,
      dataType: 'json'
    })
  })
})

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('sw.js')
//     .then(registration => {
//       console.log('offline worker registered!')
//     })
// }
