document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('.burger-icon')
  const navList = document.querySelector('.navListMob')

  burgerIcon.addEventListener('click', () => {
    navList.classList.toggle('active')
    burgerIcon.classList.toggle('active')
  })
})
