const main = () => {
  const main_quote = document.querySelector('.quote__main')

  // conditional to prevent error when component is missing
  if (!main_quote) {
    return
  }

  function setBlockQuote(text) {
    main_quote.innerHTML = text
  }

  function getQuoteText(item) {
    return item.querySelector('.quote__person_card').innerHTML
  }

  if (main_quote) {
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
}
main()
