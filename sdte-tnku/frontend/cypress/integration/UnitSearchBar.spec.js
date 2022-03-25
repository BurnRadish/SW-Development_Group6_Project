describe('SearchBar Unit Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('Enter keyword', () => {
        const newItem = 'restaurant'
        
        cy.get('[data-testid=input]').type(`${newItem}{enter}`)
    })

    it('Select type', () => {
        cy.get('.form-select').select('ATTRACTION')
          .should('have.value', 'ATTRACTION')

        cy.get('.form-select').select('ACCOMMODATION')
          .should('have.value', 'ACCOMMODATION')

        cy.get('.form-select').select('RESTAURANT')
          .should('have.value', 'RESTAURANT')
    })

    it('Button click', () => {
        cy.get('[data-testid=button]').click()
    })

    it('url check', () => {
        const newItem = 'restaurant'
        
        cy.get('[data-testid=input]').type(`${newItem}{enter}`)

        cy.get('.form-select').select('RESTAURANT')
          .should('have.value', 'RESTAURANT')

        cy.get('[data-testid=button]').click()
        
        cy.url().should('eq', 'http://localhost:8080/result/restaurant/RESTAURANT')
    })
})