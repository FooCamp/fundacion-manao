const indicators = [...document.querySelectorAll('.card-indicators button')]
const card = [...document.querySelectorAll('.card')]
const btnFor = document.querySelector('.control__arrow-for')
const btnBack = document.querySelector('.control__arrow-back')

let actualStory = 0 // Default 0

indicators[0].classList.add('active')
card[0].classList.add('active')

function toggleActive() {
  indicators[actualStory].classList.toggle('active')
  card[actualStory].classList.toggle('active')
}

btnFor.addEventListener('click', () => {
  toggleActive()
  actualStory++
  if (actualStory >= indicators.length) {
    actualStory = 0
  }
  toggleActive()
})

btnBack.addEventListener('click', () => {
  toggleActive()
  actualStory--
  if (actualStory < 0) {
    actualStory = indicators.length - 1
  }
  toggleActive()
})

indicators.forEach((item, i) => {
  item.addEventListener('click', () => {
    toggleActive()
    item.classList.toggle('active')
    card[i].classList.toggle('active')
    actualStory = i
  })
})
