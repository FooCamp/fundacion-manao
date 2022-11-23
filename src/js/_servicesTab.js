const CLASSES = {
  active: 'sTabActive',
}

const SELECTORS = {
  tabN: '.service-tabs__tab--n',
  tabI: '.service-tabs__tab--i',
  tNames: '.tab__name',
  tImage: '.tab__image',
}
const main = () => {
  const tabN = document.querySelector(SELECTORS.tabN)

  // conditional to prevent error when component is missing
  if (!tabN) {
    return
  }

  const tabI = document.querySelector(SELECTORS.tabI)
  const namesErase = tabI.querySelectorAll(SELECTORS.tNames)
  const imagesErase = tabN.querySelectorAll(SELECTORS.tImage)
  const names = tabN.querySelectorAll(SELECTORS.tNames)
  const images = tabI.querySelectorAll(SELECTORS.tImage)

  // Clean items that are not going to be used
  namesErase.forEach((item) => {
    item.remove()
  })
  imagesErase.forEach((item) => {
    item.remove()
  })

  // Assigns the 'active' class to the first element
  names[0].classList.toggle(CLASSES.active)
  images[0].classList.toggle(CLASSES.active)

  const removeClass = () => {
    names.forEach((empty, i) => {
      names[i].classList.remove(CLASSES.active)
      images[i].classList.remove(CLASSES.active)
    })
  }

  const activeClass = (i) => {
    names[i].classList.add(CLASSES.active)
    images[i].classList.add(CLASSES.active)
  }

  names.forEach((currentTab, i) => {
    currentTab.addEventListener('click', () => {
      removeClass()
      activeClass(i)
    })
  })
}

main()
