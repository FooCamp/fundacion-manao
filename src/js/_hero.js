// Adding classes Oject

const CLASSES = {
  active: 'active',
  inactive: 'inactive',
}

//Adding function to toggle visibility
const toggleElementsVisibility = (
  item,
  index,
  activeIndex,
  shouldSetupA11y = false
) => {
  if (activeIndex !== index) {
    item.classList.remove(CLASSES.active)
    item.classList.add(CLASSES.inactive)
    if (shouldSetupA11y) {
      const anchor = item.querySelector('.link')
      item.setAttribute('aria-hidden', true)
      anchor?.setAttribute('tabindex', -1)
    }
  } else {
    item.classList.add(CLASSES.active)
    item.classList.remove(CLASSES.inactive)
    if (shouldSetupA11y) {
      const anchor = item.querySelector('.link')
      item.setAttribute('aria-hidden', false)
      anchor?.setAttribute('tabindex', 0)
    }
  }
}

const main = () => {
  //Defining selectors as constants.
  const ctas = document.querySelectorAll('.hero__cta')
  const ctasSubcontainer = document.querySelectorAll('.hero__cta-sub-container')
  const heroSubcontainer = document.querySelectorAll('.hero__sub-container')
  const heroImage = document.querySelectorAll('.hero__image')

  //Adding function to include accesibility atributes
  const setUpInitialA11y = () => {
    heroSubcontainer.forEach((item, index) => {
      if (index === 0) {
        item.setAttribute('aria-hidden', false)
      } else {
        const anchor = item.querySelector('.link')
        item.setAttribute('aria-hidden', true)
        if (anchor) {
          anchor.setAttribute('tabindex', -1)
        }
      }
    })

    heroImage.forEach((item, index) => {
      item.setAttribute('aria-hidden', index !== 0)
    })
  }

  ctas.forEach((cta, index) => {
    cta.addEventListener('click', () => {
      //Removing active class to the elements without the index of the current element
      heroSubcontainer.forEach((item, itemIndex) => {
        toggleElementsVisibility(item, itemIndex, index, true)
      })

      heroImage.forEach((item, itemIndex) => {
        toggleElementsVisibility(item, itemIndex, index, true)
      })

      ctasSubcontainer.forEach((item, itemIndex) => {
        toggleElementsVisibility(item, itemIndex, index)
      })
    })
  })

  setUpInitialA11y()
}

main()
