// Adding classes Oject

const CLASSES = {
  active: 'active',
  inactive: 'inactive',
  shape: 'hero__shape',
  shapes: ['shape1', 'shape2', 'shape3', 'shape4', 'shape5', 'shape6'],
}

const ASSETS = {
  shapeImages: [
    '/images/Shape-M.svg',
    '/images/Shape-A-Green.svg',
    'images/Shape-A-Magenta.svg',
  ],
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

//Adding function to change Hero Shapes

const changeShapes = (index, container) => {
  let indexIteratorOne = 2 * (index + 1) - 2
  let indexIteratorTwo = 2 * (index + 1) - 1
  if (
    !container[0].classList.contains(CLASSES.shapes[indexIteratorOne]) &&
    !container[1].classList.contains(CLASSES.shapes[indexIteratorTwo])
  ) {
    container[0].setAttribute('src', ASSETS.shapeImages[index])
    container[1].setAttribute('src', ASSETS.shapeImages[index])
    container[0].className = ''
    container[1].className = ''
    container[0].classList.add(
      CLASSES.shape,
      CLASSES.shapes[indexIteratorOne],
      CLASSES.active
    )
    container[1].classList.add(
      CLASSES.shape,
      CLASSES.shapes[indexIteratorTwo],
      CLASSES.active
    )
  }
}

const main = () => {
  //Defining selectors as constants.

  const ctas = document.querySelectorAll('.hero__cta')
  const ctasSubcontainer = document.querySelectorAll('.hero__cta-sub-container')
  const heroWrapper = document.querySelectorAll('.hero__wrapper')
  const heroShape = document.querySelectorAll('.hero__shape')

  //Adding function to include accesibility atributes

  const setUpInitialA11y = () => {
    heroWrapper.forEach((item, index) => {
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
  }

  ctas.forEach((cta, index) => {
    cta.addEventListener('click', () => {
      //Removing active class to the elements without the index of the current element

      heroWrapper.forEach((item, itemIndex) => {
        toggleElementsVisibility(item, itemIndex, index, true)
      })

      // heroSubcontainer.forEach((item, itemIndex) => {
      //   toggleElementsVisibility(item, itemIndex, index, true)
      // })

      // heroImage.forEach((item, itemIndex) => {
      //   toggleElementsVisibility(item, itemIndex, index, true)
      // })

      ctasSubcontainer.forEach((item, itemIndex) => {
        toggleElementsVisibility(item, itemIndex, index)
      })

      changeShapes(index, heroShape)
    })
  })

  setUpInitialA11y()
}

main()
