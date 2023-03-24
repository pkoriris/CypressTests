describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  describe('My Second Test', () => {
    it('clicks the link "type"', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
    })
  })
  describe('My First Test', () => {
    it('clicking "type" navigates to a new url', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
    })
  })
})