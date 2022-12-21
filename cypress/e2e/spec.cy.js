describe('тестирование конвертора и курса валют', () => {

    it('тестирование ввода данных и конвертирования', () => {
      cy.visit('http://localhost:8080/CurrencyConverter.html')
      cy.get('#commandInput')
          .type('150 gbp in gbp', {delay: 100})
      cy.get('.currencyForm')
          .submit(), {delay: 100}
      cy.get('#result')
          .should('have.value', '150.00')
      cy.wait(5000)
      cy.get('#commandInput').clear()
          .type('1000 eur in eur', {delay: 100})
      cy.get('.currencyForm')
          .submit(), {delay: 100}
      cy.get('#result')
          .should('have.value', '1000.00')
      cy.wait(5000)
    })


    it('тестирование курса валют', () => {
      cy.visit('http://localhost:8080/CurrencyRates.html')
      cy.get('#base_currency')
          .should('have.value', 'Выберите валюту')
      cy.get('#base_currency').select('EUR')
      cy.get('#base_currency').should('have.value', 'eur')
      cy.get('#EUR').should('have.value', '1.0000')
      cy.wait(5000)
      cy.get('#base_currency').select('RUB')
      cy.get('#base_currency').should('have.value', 'rub')
      cy.get('#EUR').should('have.value', '1.0000')
    })

})
