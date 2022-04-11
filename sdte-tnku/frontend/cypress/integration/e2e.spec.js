/// <reference types="cypress" />

describe('E2e test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('ATTRACTION Case', () => {
        const newItem = 'พระสยามเทวาธิราชจำลอง'
        
        cy.get('[data-testid=input]').type(`${newItem}{enter}`)

        cy.get('.form-select').select('ATTRACTION')

        cy.get('[data-testid=button]').click()
        
        cy.get('.row img').click()

    })

    it('ACCOMMODATION Case', () => {
        const newItem2 = 'อมารี ดอนเมือง แอร์พอร์ต กรุงเทพ'
        
        cy.get('[data-testid=input]').type(`${newItem2}{enter}`)

        cy.get('.form-select').select('ACCOMMODATION')

        cy.get('[data-testid=button]').click()
        
        cy.get('.row img').click()
    })

    it('RESTAURANT Case', () => {
        const newItem3 = 'ขนมจีนยายฟัก'
        
        cy.get('[data-testid=input]').type(`${newItem3}{enter}`)

        cy.get('.form-select').select('RESTAURANT')

        cy.get('[data-testid=button]').click()
        
        cy.get('.row img').click()
    })
})