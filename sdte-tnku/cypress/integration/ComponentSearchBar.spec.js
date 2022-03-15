
describe('SearchBar Component Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('Find input tag', () => {
        cy.get('.input-group').find('input')
    })

    it('Find Select tag', () => {
        cy.get('.input-group').find('select')
    })

    it('Have 3 choice', () => {
        cy.get('.input-group').find('option').should('have.length', 3)
    })

    it('Find button tag', () => {
        cy.get('.input-group').find('button')
    })
})