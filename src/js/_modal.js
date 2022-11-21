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
