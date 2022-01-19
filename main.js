document
  .querySelectorAll('.fa-icon')
  .forEach(el => el.removeAttribute('aria-hidden'))

const sharePopUp = document.getElementsByClassName('article-author')[0]

window.addEventListener('click', event => {
  if (
    event.target.classList.contains('social-media-button') ||
    sharePopUp.classList.contains('active')
  ) {
    sharePopUp.classList.toggle('active')
  }
})
