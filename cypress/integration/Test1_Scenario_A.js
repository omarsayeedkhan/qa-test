describe('Elmo Software', function () {

   context('Able to open Elmo Software webpage', function(){
     it('should redirect to elmo software Home page and verify the following', function(){
      cy.visit('https://elmosoftware.com.au/')
      cy.get('.hamburger-box').click()
      cy.wait(3000)
      cy.get('#mobile-nav-item-1').click()
      cy.wait(3000)
      cy.get(':nth-child(2) > .top > .a-inner > .svg-icon > .svg-inner > svg').click()
      cy.wait(3000)
      cy.get('.cat-bg-engage > :nth-child(1) > a > .a-inner').click()
      cy.wait(3000)
      cy.contains('Key Benefits')
      cy.wait(3000)
      cy.get(':nth-child(1) > .top > .a-inner > .svg-icon > .svg-inner > svg').click()
      cy.wait(3000)
      cy.get('.row > :nth-child(1) > .cat-color-pay > .svg-icon > .svg-inner > svg').click()
      cy.wait(3000)
      cy.contains('Seamless cloud-based payroll and HR solution')
  })
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
  return false
  })
})
