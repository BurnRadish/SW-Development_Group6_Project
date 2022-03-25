describe('Reviewbox Component Test', () => {
    it('Render Detail Page', () => {
      cy.visit('http://localhost:8080/detail/P08016646/RESTAURANT')
    })
    it('Find img', () => {
        cy.get('.card').find('img')
    })
    it('Find reviewer name', () => {
        cy.get('.fw-bold').should('be.visible')
    })
    it('Find reviewer score', () => {
        cy.get('.text-muted').contains('Score :')
    })
    it('Find reviewer msg', () => {
        cy.get('[data-testid=msg]').should('be.visible')
    })
})