document
  .querySelectorAll('.fa-icon')
  .forEach(el => el.removeAttribute('aria-hidden'))

document
  .getElementsByClassName('social-media-button')[0]
  .addEventListener('click', () =>
    document
      .getElementsByClassName('article-author')[0]
      .classList.toggle('active')
  )
