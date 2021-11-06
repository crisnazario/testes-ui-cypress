/// <reference types="cypress"/>

context('Funcionalidade da página de produtos', () => {


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        let quantidade = 7

        cy.get('[class="product-block grid"]')
        .first()
        .click()

        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear()
        cy.get('.input-text').type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar um produto da lista de desejo', () => {
        let quantidade = 1

        cy.get('[class="product-block grid"]')
        .eq(4)
        .click()

        cy.get('.summary > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > .add_to_wishlist > :nth-child(2) > span').click()
    
        cy.get(':nth-child(2) > .text-skin > .count_wishlist').should('contain', quantidade) 
    });

})