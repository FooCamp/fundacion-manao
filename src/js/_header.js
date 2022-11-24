const CLASSES = {
  active: 'active',
  openMobileMenu: 'lock-scroll',
}

const SELECTORS = {
  hamburger: '.hamburger',
  navMenu: '.header__menu',
  body: 'body',
  link: '.header__menu .link',
}
// hamburger mobile menu
if (window.matchMedia('(max-width: 1023px)').matches) {
  const main = () => {
    const hamburger = document.querySelector(SELECTORS.hamburger)
    const navMenu = document.querySelector(SELECTORS.navMenu)
    const body = document.querySelector(SELECTORS.body)
    const link = document.querySelectorAll(SELECTORS.link)

    // conditional to prevent error when component is missing
    if (!hamburger) {
      return
    }

    const activeToggle = () => {
      hamburger.classList.toggle(CLASSES.active)
      navMenu.classList.toggle(CLASSES.active)

      if (navMenu.classList.contains(CLASSES.active)) {
        // Disable scroll
        body.classList.add(CLASSES.openMobileMenu)
        navMenu.scrollTop = 0
      } else {
        // Enable scroll
        body.classList.remove(CLASSES.openMobileMenu)
      }
    }
    link.forEach((item) => {
      item.addEventListener('click', () => {
        activeToggle()
      })
    })
    // mobile menu
    hamburger.addEventListener('click', () => {
      activeToggle()
    })
  }
  main()
}
