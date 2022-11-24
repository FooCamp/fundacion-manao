const CLASSES = {
  active: 'sTabActive',
}

const SELECTORS = {
  tabNames: '.service-tabs__name',
  tabContent: '.service-tabs__content',
  tNames: '.tab__name',
  tContent: '.tab__content',
}
const main = () => {
  const tabNames = document.querySelector(SELECTORS.tabNames)

  // conditional to prevent error when component is missing
  if (!tabNames) {
    return
  }

  const tabContent = document.querySelector(SELECTORS.tabContent)

  const names = tabNames.querySelectorAll(SELECTORS.tNames)
  const content = tabContent.querySelectorAll(SELECTORS.tContent)

  // Assigns the 'active' class to the first element
  names[0].classList.toggle(CLASSES.active)
  content[0].classList.toggle(CLASSES.active)

  const removeClass = () => {
    names.forEach((empty, i) => {
      names[i].classList.remove(CLASSES.active)
      content[i].classList.remove(CLASSES.active)
    })
  }

  const activeClass = (i) => {
    names[i].classList.add(CLASSES.active)
    content[i].classList.add(CLASSES.active)
  }

  names.forEach((currentTab, i) => {
    currentTab.addEventListener('click', () => {
      removeClass()
      activeClass(i)
    })
  })
}

main()
