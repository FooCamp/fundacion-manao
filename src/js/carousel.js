const indicators = [...document.querySelectorAll('.card-indicators button')]
const card = [...document.querySelectorAll('.card')]
const btnFor = document.querySelector('.control__arrow-for')
const btnBack = document.querySelector('.control__arrow-back')

let actualStory = 0 // Default 0

indicators[0].classList.add('active')
card[0].classList.add('active')

btnFor.addEventListener('click', () => {
  indicators[actualStory].classList.remove('active')
  card[actualStory].classList.remove('active')
  actualStory = actualStory + 1
  if (actualStory >= indicators.length) {
    actualStory = 0
  }
  indicators[actualStory].classList.add('active')
  card[actualStory].classList.add('active')
})

btnBack.addEventListener('click', () => {
  indicators[actualStory].classList.remove('active')
  card[actualStory].classList.remove('active')
  actualStory = actualStory - 1
  if (actualStory < 0) {
    actualStory = indicators.length - 1
  }
  indicators[actualStory].classList.add('active')
  card[actualStory].classList.add('active')
})

indicators.forEach((item, i) => {
  item.addEventListener('click', () => {
    indicators[actualStory].classList.remove('active')
    card[actualStory].classList.remove('active')
    item.classList.add('active')
    card[i].classList.add('active')
    actualStory = i
  })
})
