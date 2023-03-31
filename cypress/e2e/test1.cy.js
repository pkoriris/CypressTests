///<reference types="cypress"/>
it('Google Search',function(){

     cy.visit('https://google.com')
     cy.get('.RNNXgb').type('Automation Step by Step{Enter}')
 
    cy.wait(4000)
    cy.contains('Videos').click()

})

it.only('login test',function(){
cy.visit('https://opensource-demo.orangehrmlive.com/')
cy.get('[name="username"]').type('Admin')
cy.get('[name="password"]').type('admin123')
cy.get('[type="submit"]').should('be.visible').click()
cy.get(':nth-child(1) > .oxd-main-menu-item').click()
cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
cy.get('.oxd-topbar-body-nav-tab-link').click()
cy.get('.orangehrm-header-container > .oxd-button').click()
cy.get('.oxd-button--secondary').click()
//Title verification
// cy.title().should('eq',"OrangeHRM")


}
)
