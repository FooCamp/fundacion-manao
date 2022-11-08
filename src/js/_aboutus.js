const CLASSES = {
  active: 'active',
}
const main = () => {
  function getBlockQuote(item) {
    return item.querySelector('.person_card__quote_image')
  }

  const person_cards = document.querySelectorAll('.person_card__container')
  getBlockQuote(person_cards[0]).classList.add(CLASSES.active)
  person_cards.forEach(function (item) {
    item.addEventListener('mouseenter', () => {
      getBlockQuote(person_cards[0]).classList.remove(CLASSES.active)
      getBlockQuote(item).classList.add(CLASSES.active)
    })
    item.addEventListener('mouseleave', () => {
      getBlockQuote(item).classList.remove(CLASSES.active)
      getBlockQuote(person_cards[0]).classList.add(CLASSES.active)
    })
  })
}
main()
