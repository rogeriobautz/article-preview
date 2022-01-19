document
  .getElementsByClassName('social-media-button')[0]
  .addEventListener('click', () =>
    document
      .getElementsByClassName('article-author')[0]
      .classList.toggle('active')
  )
