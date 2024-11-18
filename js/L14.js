document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('.burger-icon')
  const navList = document.querySelector('.navListMob')
  const logoText = document.querySelector('.logoText')
  burgerIcon.addEventListener('click', () => {
    navList.classList.toggle('active')
    burgerIcon.classList.toggle('active')
    logoText.classList.toggle('active')
  })
})
