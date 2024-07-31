
require('cypress-xpath');



describe("Assertion", ()=>{

  it("implement assertion", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should('include','orangehrmlive.com')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain','orangehrm')

    cy.get('.orangehrm-login-branding > img').should('be.visible')
    .and('exist')
    cy.xpath("//a").should('have.length','5')
    
  })

  it("explicit assertion", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()

  })
})