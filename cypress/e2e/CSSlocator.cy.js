describe('CSSlocator', () => {

  it("CSSlocator", () => {

    cy.visit("https://www2.hm.com/en_ca/index.html")

     cy.get("[data-elid='search-input']").type("men")
     cy.get("#__2OnJ u9au").click()
     cy.get("for='imageToggleProduct'le.ma0.di").contains("product")



  })


})