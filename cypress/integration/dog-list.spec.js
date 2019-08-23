describe('Dog list', ()=>  {
  it('Go to main page!', () => {
    cy.visit('/');
  });

  it('Should render a list all breed', () => {
    cy.get('.all-dogs div')
      .its('length')
      .should('be.gt', 0)
  });

  it('should look for all breed which their names contains the letters bull', () => {
    cy.get('.created-by input')
      .type('bob')

    cy.get('.all-dogs div')
      .its('length')
      .should('be', 4)

    cy.get('.all-dogs div')
      .eq(1)
      .get('.dog-container')
      .should('contain', 'bouvier')
  });
})