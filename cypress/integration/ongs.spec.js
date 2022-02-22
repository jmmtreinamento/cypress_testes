/// <reference types="cypress" />

describe('PNLD', () => {
    
    it('deve poder realizar um login no sistema', () => {
        cy.visit('https://atributo.digi.tst.apps.rnp.br/login');
        cy.get('#username').type("andre.dellatorre+83464047865@redspark.io");
        cy.get('#password').type("Asdf!2345678");
        cy.get('#btn-signin > .MuiButton-label').click();
    });

    it(' Verificar se está na tela de recursos ', () => {
        cy.wait(2000)  // 2 segundos
        cy.get('[href="/appeals"]').click();

<<<<<<< HEAD
=======
    it('deve navegar nos menus superiores do sistema', () => {
        cy.get('[href="/appeals"]').click();
        cy.wait(1500);
        cy.get('[href="/users-list"]').click();
        cy.wait(1500);
        cy.get('[href="/publisher-request"]').click();
        cy.wait(1500);
        cy.get('[href="/alert"]').click();
        cy.wait(1500);
        cy.get('.MuiButtonBase-root > .MuiTypography-root').click();
        cy.wait(900);
        cy.get('.MuiList-root > [tabindex="-1"]').click();
        cy.wait(1500);
        cy.get('[href="/settings/static-fields"]').click();        
>>>>>>> ad3de6df0e1073fd051d04b6145f6bf5f0ea535e
    });

    /*it(' Verificar se está na tela de Usuários ', () => {
        cy.wait(2000)  // 2 segundos
        cy.get('[href="/users-list"]').click();
    });*/

    it(' Verificar se está na tela de Solicitações ', () => {
        cy.wait(2000)  // 2 segundos
        cy.get('[href="/publisher-request"]').click();
    });

    it(' Verificar se está na tela de Alertas ', () => {
        cy.wait(2000)  // 2 segundos
        cy.get('[href="/alert"]').click();
    
    });

    it(' Verificar se está na tela de Configuraçõe ', () => {
        cy.wait(2000)  // 2 segundos
        cy.get('[href="/settings/static-fields"]').click();
    });

});