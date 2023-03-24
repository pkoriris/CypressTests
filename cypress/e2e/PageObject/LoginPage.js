class LoginPage{

    navigate(){
        cy.visit("https://admin-demo.nopcommerce.com/")
    }
    enterEmail(username){
        cy.get('[id=Email]')
          .clear()
          .type(username)
          return this

    }

    enterPassword(pswd){
        cy.get('[Password]')
           .clear()
           .type(pswd)
    }
    submit(){
        cy.get('[type=submit]').click()
    }
}
export default LoginPage