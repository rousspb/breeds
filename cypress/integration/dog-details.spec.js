describe('Dog Detail', () => {
  it('should go to main page',() => {
    cy.visit('/');
  });

  it('Should render a list all breed', () => {
    cy.get('.all-dogs div')
      .its('length')
      .should('be.gt', 0)
  });

  it('should click in the first breed and transition to the new route', () => {
    cy.get('.all-dogs div')
      .eq(0)
      .click()
    
    cy.get('.dog-details-header')
      .should('be.visible')

    cy.get('.all-dogs div')
      .its('length')
      .should('be.gt', 0)
  })
})