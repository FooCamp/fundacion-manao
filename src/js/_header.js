const CLASSES = {
  active: 'active',
}

const STYLES = {
  hidden: 'hidden',
}

const SELECTORS = {
  hamburger: '.hamburger',
  navMenu: '.header__menu',
  body: 'body',
  link: '.header__menu .link',
}

const main = () => {
  const hamburger = document.querySelector(SELECTORS.hamburger)
  const navMenu = document.querySelector(SELECTORS.navMenu)
  const body = document.querySelector(SELECTORS.body)
  const link = document.querySelectorAll(SELECTORS.link)

  const activeToggle = () => {
    hamburger.classList.toggle(CLASSES.active)
    navMenu.classList.toggle(CLASSES.active)

    if (navMenu.classList.contains(CLASSES.active)) {
      // Disable scroll
      body.style.overflow = STYLES.hidden
    } else {
      // Enable scroll
      body.removeAttribute('style')
    }
  }
  link.forEach((item) => {
    item.addEventListener('click', () => {
      activeToggle()
    })
  })

  hamburger.addEventListener('click', () => {
    activeToggle()
  })
}

main()
