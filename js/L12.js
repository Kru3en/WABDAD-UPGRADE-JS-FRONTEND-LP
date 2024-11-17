document.addEventListener('DOMContentLoaded', () => {
  const arrow = document.querySelector('.optionalArrow')
  const optionalList = document.querySelector('.contOptionalList')

  optionalList.style.display = 'grid'

  arrow.addEventListener('click', () => {
    if (optionalList.style.display === 'none') {
      optionalList.style.display = 'grid'
    } else {
      optionalList.style.display = 'none'
    }
    arrow.classList.toggle('rotated')
  })
})
