document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.contSliderItem')
  const buttons = document.querySelectorAll('.buttonSlider')
  const hr = document.querySelectorAll('.mobHrActive')
  const leftArrow = document.querySelector(".sliderArrow[alt='leftArrow']")
  const rightArrow = document.querySelector(".sliderArrow[alt='rightArrow']")

  let currentSlide = 0

  const updateSlides = index => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index)
    })

    buttons.forEach((button, i) => {
      button.classList.toggle('active', i === index)
    })
    hr.forEach((button, i) => {
      button.classList.toggle('active', i === index)
    })
  }

  const showNextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length
    updateSlides(currentSlide)
  }

  const showPrevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    updateSlides(currentSlide)
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentSlide = index
      updateSlides(currentSlide)
    })
  })

  leftArrow.addEventListener('click', showPrevSlide)
  rightArrow.addEventListener('click', showNextSlide)

  updateSlides(currentSlide)
})
