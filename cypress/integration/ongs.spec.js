/// <reference types="cypress" />

describe('PNLD', () => {
    
    it('deve poder realizar um login no sistema', () => {
        cy.visit('https://atributo.digi.tst.apps.rnp.br/login');
        cy.get('#username').type("andre.dellatorre+83464047865@redspark.io");
        cy.get('#password').type("Asdf!2345678");
        cy.get('#btn-signin > .MuiButton-label').click();
    });


    it(' clicar no botão cadastrar edital ', () => {
        cy.wait(1000);
        cy.get('.MuiGrid-root > .MuiButtonBase-root > .MuiButton-label').click();
      });

    it(' preencher a tela de cadatro ', () => {
        cy.wait(1000);
        cy.get('#title').type("treino22");
        cy.get('#year').type("2022");
        cy.get('#type').click();
        cy.wait(900);
        cy.get('[data-value="PNLD"] > .MuiListItemText-root > .MuiTypography-root').click();
        cy.get('#number').type("02");
      });

    /*it(' clicar no botão cadastrar na tela de cadatro ', () => {
        cy.wait(3000);
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click();
      });*/

    it(' clicar no X na tela de cadastro ', () => {
        cy.wait(1000);
        cy.get('.MuiDialogTitle-root > div > .MuiButtonBase-root > .MuiIconButton-label > svg > path').click();
       });

    /*it(' clicar em perfil no topo da tela ', () => {
        cy.wait(1000);
        cy.get('.sc-fFucqa > .MuiButtonBase-root > .MuiButton-label > span').click();
    });

    it('pesquisar por edital ', () => {
        cy.wait(3000);
        cy.get('#searchTerm').click();
        cy.get('#searchTerm').type("JMM EDITAL TESTE 21/02/2022");
        cy.get('#btSearch > .MuiIconButton-label > .MuiSvgIcon-root').click();
            });*/

    it(' expandir informações do edital ', () => {
        cy.wait(1000);
        cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(5) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click();
        });

    it('editar o edital ', () => {
        cy.wait(3000);
        cy.get('.MuiTableCell-alignCenter > .MuiButtonBase-root > .MuiIconButton-label > svg > path').click();
        cy.get('.MuiList-root > [tabindex="0"]').click();
        });
    
});