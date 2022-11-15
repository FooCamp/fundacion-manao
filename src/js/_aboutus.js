const main = () => {
  const main_quote = document.querySelectorAll('.quote__main')[0]

  function setBlockQuote(text) {
    main_quote.innerHTML = text
  }

  function getQuoteText(item) {
    return item.querySelector('.quote__person_card').innerHTML
  }

  const person_cards = document.querySelectorAll('.person_card__container')
  // Default quote
  setBlockQuote(getQuoteText(person_cards[0]))
  // Add event listener per card
  person_cards.forEach(function (item) {
    item.addEventListener('mouseenter', () => {
      // Write card quote
      setBlockQuote(getQuoteText(item))
    })
    item.addEventListener('mouseleave', () => {
      // Write default quote
      setBlockQuote(getQuoteText(person_cards[0]))
    })
  })
}
main()
