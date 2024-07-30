/// <reference types="cypress" />


describe('DropDown',()=>{

  it('DropDown with select' ,()=>{
    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    cy.get("#zcf_address_country").select("India").should('have.value','India')



  })
})