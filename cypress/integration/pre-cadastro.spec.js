/// <reference types="cypress" />

const { fake } = require('faker');
var faker = require('faker');

context('Funcionalidade de Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email()
        let senha = 'Te$te3b@<'

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    })

    it('Deve retornar mensagem dizendo que o preenchimento do email é obrigatório', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email()
        let senha = 'Te$te3b@<'

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('#account_email').clear()
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail é um campo obrigatório.')
    })

});

