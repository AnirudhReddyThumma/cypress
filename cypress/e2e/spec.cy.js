describe('my first test', () => {


  it('verify title-positive', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq', 'OrangeHRM')
  })


it('verify title-negitive', () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/")
  cy.title().should('eq', 'orangeHRM')
})


})