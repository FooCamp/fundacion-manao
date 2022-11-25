const CLASSES = {
  activeModal: 'visible',
}

const SELECTORS = {
  openModal: '.header__menu__item',
  modal: 'body > .modal',
  modalBg: 'body > .modal .modal__background',
  closeModal: 'body > .modal .modal__close',
}
if (window.matchMedia('(min-width: 1024px)').matches) {
  const main = () => {
    const btnModal = document.querySelectorAll(SELECTORS.openModal)
    const openModal = btnModal[btnModal.length - 1]
    const modal = document.querySelector(SELECTORS.modal)
    const modalBg = document.querySelector(SELECTORS.modalBg)
    const closeModal = document.querySelector(SELECTORS.closeModal)

    // add all the elements inside modal which you want to make focusable

    const focusableElements = 'button, [href], [tabindex]:not([tabindex="-1"])'
    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal
    const focusableContent = modal.querySelectorAll(focusableElements)
    const lastFocusableElement = focusableContent[focusableContent.length - 1] // get last element to be focused inside modal

    // open modal
    openModal.addEventListener('click', function (event) {
      event.preventDefault()
      showModal()
    })

    // hide modal
    modalBg.addEventListener('click', function (event) {
      event.preventDefault()
      hideModal()
    })

    closeModal.addEventListener('click', function (event) {
      event.preventDefault()
      hideModal()
    })

    // disable & enable scroll when dmodal is visible

    const disableScroll = () => {
      // Get the current page scroll position
      let xScrollPosition = window.scrollX
      let yScrollPosition = window.scrollY

      window.onscroll = function () {
        window.scrollTo(xScrollPosition, yScrollPosition)
      }
    }

    const enableScroll = () => {
      window.onscroll = function () {}
    }

    // show & hide modal
    const showModal = () => {
      modal.classList.add(CLASSES.activeModal)

      // focus trapped inside modal
      document.addEventListener('keydown', function (e) {
        let isTabPressed = e.key === 'Tab' || e.keyCode === 9

        if (!isTabPressed) {
          return
        }

        if (e.shiftKey) {
          // if shift key pressed for shift + tab combination
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus() // add focus for the last focusable element
            e.preventDefault()
          }
        } else {
          // if tab key is pressed
          if (document.activeElement === lastFocusableElement) {
            // if focused has reached to last focusable element then focus first focusable element after pressing tab
            firstFocusableElement.focus() // add focus for the first focusable element
            e.preventDefault()
          }
        }
      })

      // autofocus on X icon
      closeModal.focus()

      // close modal when press esc key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          hideModal()
          enableScroll()
        }
      })

      //disable scroll
      disableScroll()
    }

    const hideModal = () => {
      modal.classList.remove(CLASSES.activeModal)
      enableScroll()
    }
  }

  main()
}
