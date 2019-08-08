describe('Elmo Careers', function () {

  context('Able to find the button with text', function(){
     it('should redirect to elmo careers and look for the button', function(){
      cy.visit('https://elmosoftware.com.au/careers/')
      cy.contains('Browse Jobs')
      cy.wait(3000)
    })
  })
  

  context('Able to search jobs under Elmo careers', function(){
     it('should redirect to elmo jobs', function(){
      cy.visit('https://elmosoftware.com.au/jobs/')
      cy.get('#elmo-recruitment-embed').click()
    })
  })
  
  Cypress.on('uncaught:exception', (err, runnable) => {
  return false
  })
})
