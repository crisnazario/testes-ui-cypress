/// <reference types="cypress"/>

context('Funcionalidade Login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve realizar login com sucesso', () => {
        let email = 'aluno_ebac@teste.com'
        let senha = 'teste@teste.com'

        cy.get('#username').type(email)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Deve exibir mensagem de erro ao inserir email incorreto', () => {
        let email = 'ebac@teste.com'
        let senha = 'teste@teste.com'

        cy.get('#username').type(email)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    });

    it('Deve exibir menssagem de erro ao inserir senha inválida', () => {
        let email = 'aluno_ebac@teste.com'
        let senha = 'teste@teste.'
        
        cy.get('#username').type(email)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.')
    });


});