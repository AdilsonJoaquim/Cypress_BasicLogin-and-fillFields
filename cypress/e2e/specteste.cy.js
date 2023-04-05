describe('Meu primeiro teste em Cypres no Embarcação', () => {
    it('Login sucesso', () => {
  //   Aqui informamos a página a visitar
     cy.visit('http://localhost/sistema-gestao-embarcacao/login.php')
  
        
     //pegamos o nome do id do elemento e escrevemos em type alguma coisa
     cy.get('[data-cy="email"]').type('honorio') 
  
     //cy.get('[data-cy="senha"]').type('have.value', 123) 
     cy.get('[data-cy="senha"]').type('not.have.value', 123) 
        //pegamos o id do elemento do botão e 
     cy.get('[data-cy="login"]').click()
     
     cy.wait(2000) //Informo que deve esperar 2 segundos

    }) 
    it('etc', ()=>{

        //Tentando usar uma modal::
     cy.get('[data-cy="registo"]').click()
     //cy.visit('http://localhost/sistema-gestao-embarcacao/mapa_controlo.php')
        cy.get('[data-cy="nome_empresa"]').type('NicoDeM0S')
       // cy.get('[data-cy="submit"]').click()
       
       cy.get('[data-cy="registo_embarcacao"]').type('PL')
       cy.get('[data-cy="num_titulo"]').type('05042023')
       cy.get('[data-cy="denom_embarcacao"]').type('Nic0D&M0$')
       cy.get('[data-cy="matricula"]').type('CN-11-11-KL')
       cy.get('[data-cy="nacionalidade"]').type('Bahamas')
       cy.get('[data-cy="porto_base"]').type('Cunene')
       cy.get('[data-cy="num_reg_inventario"]').type('CN-11-11-MZ')
      // cy.get('[data-cy="tipo_pesca"]').type('CN-11-11-MZ')
       cy.get('[data-cy="especies"]').type('Curvina')
       cy.get('[data-cy="total_geral_capturas"]').type('67')
       cy.get('[data-cy="gasto_combustivel"]').type('167')
       cy.get('[data-cy="dias_mar"]').type('1670')
       cy.get('[data-cy="num_caixas"]').type('567')
       /*
        */
     
    })
  })