const CLASSES = {
  tabActive: 'tab-active',
  cardActive: 'card-active',
  shapeActive: 'shape-active',
}

const SELECTORS = {
  tabs: '.hero__tabs__tab',
  cards: '.hero__cards__card',
  barScroll: '.hero__cards',
  shapes: '.hero__shapes__shape',
}

const main = () => {
  const scrollPos = document.querySelector(SELECTORS.barScroll)

  // conditional to prevent error when component is missing
  if (!scrollPos) {
    return
  }
  const tabs = document.querySelectorAll(SELECTORS.tabs)
  const cards = document.querySelectorAll(SELECTORS.cards)
  const shapes = document.querySelectorAll(SELECTORS.shapes)

  if (scrollPos) {
    const numTabs = tabs.length
    const widthScroll = scrollPos.offsetWidth
    const lengthScroll = scrollPos.scrollWidth
    const realOffset = (lengthScroll - widthScroll) / (numTabs - 1)

    tabs[0].classList.add(CLASSES.tabActive)
    cards[0].classList.add(CLASSES.cardActive)
    shapes[0].classList.add(CLASSES.shapeActive)

    scrollPos.scrollLeft = 0

    const removeClass = () => {
      tabs.forEach((nada, i) => {
        tabs[i].classList.remove(CLASSES.tabActive)
        cards[i].classList.remove(CLASSES.cardActive)
        shapes[i].classList.remove(CLASSES.shapeActive)
      })
    }

    const activeClass = (i) => {
      tabs[i].classList.add(CLASSES.tabActive)
      cards[i].classList.add(CLASSES.cardActive)
      shapes[i].classList.add(CLASSES.shapeActive)
    }

    scrollPos.addEventListener('scroll', () => {
      let test = scrollPos.scrollLeft / realOffset
      if (test < 0.5) {
        removeClass()
        activeClass(0)
      } else if (test > 0.5 && test < 1.5) {
        removeClass()
        activeClass(1)
      } else if (test > 1.5) {
        removeClass()
        activeClass(2)
      }
    })

    tabs.forEach((actualTab, i) => {
      actualTab.addEventListener('click', () => {
        removeClass()
        activeClass(i)
        scrollPos.scrollLeft = realOffset * i
      })
    })
  }
}

main()
