import A11yDialog from 'a11y-dialog'
// A11y dialog init
const dialogContainer = document.querySelector('#catalog-products-dialog-container')
const dialog = new A11yDialog(dialogContainer)

// ----
document.addEventListener('DOMContentLoaded', () => {
   dialogContainer.addEventListener('show', () => {
      document.body.classList.add('_lock')
   })
   dialogContainer.addEventListener('hide', () => {
      document.body.classList.remove('_lock')
      const img = dialogContainer.querySelector('.catalog-products-dialog__img img');
      if (img) img.src = PLACEHOLDER;
   })
})