// Selecting items

const video = document.querySelector('.video-container')
const btns = document.querySelector('.switch-btn')
const preloader = document.querySelector('.preloader')

btns.addEventListener('click', function () {
  if (!btns.classList.contains('slide')) {
    btns.classList.add('slide')
    video.pause('')
  } else {
    btns.classList.remove('slide')
    video.play('')
  }
})

// Adding preloader

window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader')
})
