document.addEventListener('DOMContentLoaded', () => {
  const timeElement = document.querySelector('.textTime')

  let hours = 5
  let minutes = 37
  let seconds = 25

  function updateTimer() {
    if (seconds > 0) {
      seconds--
    } else if (minutes > 0) {
      seconds = 59
      minutes--
    } else if (hours > 0) {
      seconds = 59
      minutes = 59
      hours--
    } else {
      clearInterval(timer)
    }

    timeElement.textContent = `${String(hours).padStart(2, '0')}:${String(
      minutes,
    ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  const timer = setInterval(updateTimer, 1000)

  updateTimer()
})
