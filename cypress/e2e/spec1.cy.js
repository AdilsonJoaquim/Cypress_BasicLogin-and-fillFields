describe('Meu primeiro teste em Cypres no UNIG', () => {
  it('Gets, types and assets"', () => {
//   cy.visit('https://example.cypress.io')
   cy.visit('http://griner.unig-erp.com')

   cy.contains('Entrar').click()

   //Comentário em cypress
   cy.url().should('include', '/login?returnUrl=%2Fdashboard')

    //Get an input, type into it
    //Aqui pegamos o nome do campo .action-email e escrevemos nele com type
   cy.get('.input-text').type('adilson.joaquim') 

   //Verify that the value has been updated
   //Aqui verificamos se o que digitamos antes é igual ao anterior
   cy.get('username').should('have.value', 'adilson.joaquim')
  })
})