const CLASSES = {
  active: 'active',
}

const SELECTORS = {
  carousel: '.carousel',
  card: '.card',
  indicators: '.card-indicators .card-indicators__button',
  arrowFor: '.control__arrow-for',
  arrowBack: '.control__arrow-back',
}

const main = () => {
  const carousels = document.querySelectorAll(SELECTORS.carousel)

  carousels.forEach((item) => {
    const indicators = item.querySelectorAll(SELECTORS.indicators)
    const card = item.querySelectorAll(SELECTORS.card)
    const btnFor = item.querySelector(SELECTORS.arrowFor)
    const btnBack = item.querySelector(SELECTORS.arrowBack)

    let actualStory = 0

    indicators[0].classList.add(CLASSES.active)
    card[0].classList.add(CLASSES.active)

    const toggleActive = () => {
      indicators[actualStory].classList.toggle(CLASSES.active)
      card[actualStory].classList.toggle(CLASSES.active)
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
        item.classList.toggle(CLASSES.active)
        card[i].classList.toggle(CLASSES.active)
        actualStory = i
      })
    })
  })
}

main()
