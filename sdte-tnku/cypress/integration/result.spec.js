describe('Result Page Render', () => {
  it('Render Result Page', () => {
    cy.visit('http://localhost:8080/result/KFC/ALL')
  })
  it('Check component in Result Page', () => {
    cy.get('h1').contains('ผลลัพธ์การค้นหา "KFC"')
    cy.get('div.card').should('be.visible')
    cy.get('img').should('be.visible')
    cy.get('div.col-9').should('be.visible')
  })
})
