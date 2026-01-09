import Links from "../../support/Pages/Links";

describe("primera suite", () => {
  beforeEach("repetir este link", () => {
    Links.ForosPage();
  });

  it("Verificar la busqueda de articulos especificos", () => {
  cy.get('[name="searchterms"]').type("Bug Reports");
  cy.get('.button-2').click();
  cy.get('[name="searchterms"]').type("13");
  cy.get('.buttons > .button-1').click();
  cy.get('[name="searchterms"]').type("Active discussions");
  cy.get('.buttons > .button-1').click();
  cy.get('.notmobile > :nth-child(4) > a').click();
  cy.get('.view-all > a').click();
  });

  it("Verificacion de articulos de configuracion y soporte", () => {
  cy.get(':nth-child(1) > .forum-details > .forum-title > a').click();
  cy.get(':nth-child(1) > .topic-details > .topic-title > a').click();
  cy.get('h1').should("be.visible");
  cy.contains("h1", "NopAdvance Plugins Installation Guide");
  cy.get('.lower > .actions > .reply-topic-button').click();
  })
 
  it("creacion de nuevo articulo Configuration and Support", () => {
  cy.get(':nth-child(1) > .forum-details > .forum-title > a').click();
  cy.get('.new-topic').click();
  cy.fixture("data").then((usuario) => {
    cy.get('[name="Email"]').type(usuario.usuario_2.email);
    cy.get('[name="Password"]').type(usuario.usuario_2.password);
    cy.wait(500);
    cy.get('.custom-control-label').click();
    //cy.wait(2000);
    //cy.get('[name="a-pxf3vcnjbwk5"]').click();
    cy.get('form > .buttons > .button-1').click();
  });
  });

  it("Verificacion de los Bug Reports", () => {
  cy.get(':nth-child(2) > .forum-details > .forum-title > a').click();
  cy.get('[name="searchterms"]').type("Add Language Switch to demo home page (arabic/english) rtl -ltr");
  cy.get('.button-2').click();
  cy.get('[name="searchterms"]').clear();
  cy.get('[name="searchterms"]').type("Author: bassam");
  cy.get('.buttons > .button-1').click();
  cy.get('[name="searchterms"]').clear();
  cy.get('.custom-control-label').click();
  cy.get('[name="forumId"]').select("General");
  cy.get('[name="within"]').select("Topic titles only");
  cy.get('[name="limitDays"]').select("1 year");
  cy.get('.buttons > .button-1').click();
  });
});