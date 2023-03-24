///<reference types="cypress"/>
it('Google Search',function(){

     cy.visit('https://google.com')
     cy.get('.RNNXgb').type('Automation Step by Step{Enter}')
 
    cy.wait(4000)
    cy.contains('Videos').click()

})

it.only('login test',function(){
cy.visit('https://opensource-demo.orangehrmlive.com/')
cy.get('[name="username"]').should('be.visible').should('be.enabled').type('Admin')
cy.get('[name="password"]').should('be.visible').should('be.enabled').type('admin123')
cy.get('[type="submit"]').should('be.visible').click()
//Title verification
cy.title().should('eq',"OrangeHRM")

})