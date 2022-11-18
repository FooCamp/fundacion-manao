const CLASSES = {
  activeModal: 'visible',
  stopScrolling: 'modal-active',
}

const SELECTORS = {
  openModal: '.header__menu__item',
  modal: '#modal',
  modalBg: '.modal__background',
  closeModal: '.modal__close',
}

const main = () => {
  // donation button
  const openModal = document.querySelectorAll(SELECTORS.openModal)[
    document.querySelectorAll(SELECTORS.openModal).length - 1
  ]

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
    hideModal()
  })

  closeModal.addEventListener('click', function (event) {
    event.preventDefault()
    hideModal()
  })

  const showModal = () => {
    modal.classList.add(CLASSES.activeModal)
    // body.classList.add(CLASSES.stopScrolling)

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
}

main()
