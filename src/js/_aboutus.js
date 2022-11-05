const CLASSES = {
  active: 'active',
}

const main = () => {
  const person_master = document.querySelector('.person_card__cards_grid')
  const person_cardjs = person_master.querySelector('.person_card__container')
  person_cardjs.addEventListener('mouseover', () => {})
  person_cardjs.classList.add(CLASSES.active)
}
main()
