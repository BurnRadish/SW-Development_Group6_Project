describe('Card Component Test', () => {
    it('Render Result Page', () => {
        cy.visit('http://localhost:8080')
      })
    it('Find Card title', () => {
        cy.get('.card-title').contains('ตลาดคลองสวน 100 ปี')
    })
    it('Find Card Text', () => {
        cy.get('.card-text').contains('มาเที่ยวกันเถอะ')
    })
    it('Find img', () => {
        cy.get('.card').find('img')
    })
    it('Find button', () => {
        cy.get('.btn').contains('ดูรายละเอียด')
    })
})