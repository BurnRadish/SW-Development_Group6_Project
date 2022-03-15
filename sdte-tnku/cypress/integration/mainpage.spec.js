describe('test-component-result', () =>{
  it('render result component', () =>{
    cy.visit('http://localhost:8080/result/MK/RESTAURANT')
    cy.get('h1').contains("ผลลัพธ์การค้นหา")
  })
})

  describe('testComponent01', () =>{
    it('Render componentDetail', () => {
      cy.visit('http://localhost:8080/detail/P03010893/ATTRACTION')
      cy.get('a').contains('แผนที่')
    })
  })