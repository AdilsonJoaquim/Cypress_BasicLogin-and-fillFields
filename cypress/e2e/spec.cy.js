describe('Meu primeiro teste em Cypres', () => {
  it('Gets, types and assets"', () => {
   cy.visit('https://example.cypress.io')

   
   cy.contains('type').click()

   //Comentário em cypress
   cy.url().should('include', '/commands/actions')

    //Get an input, type into it
    //Aqui pegamos o nome do campo .action-email e escrevemos nele com type
   cy.get('.action-email').type('fake@mail.com') 

   //Verify that the value has been updated
   //Aqui verificamos se o que digitamos antes é igual ao anterior
   cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})