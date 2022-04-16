describe('Detail Review Component Page', () => {
    it('Check Detail Page', () => {
      cy.visit('https://sw-development-group6-project.vercel.app/detail/P08016585/RESTAURANT')
    })
    it('Check Review Component in detail Page', () => {
      cy.get('div.input-group-text').should('be.visible')
    })
})
  