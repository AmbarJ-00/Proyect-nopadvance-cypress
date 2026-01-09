import Links from "../../support/Pages/Links";


describe("primera suite", () => {
  beforeEach("repetir este link", () => {
    Links.LoginPage();
  });

  it("Login con datos de la carpeta fixture", () => {
    cy.fixture("data").then((usuario) => {
      cy.get('[name="Email"]').type(usuario.usuario_2.email);
      cy.get('[name="Password"]').type(usuario.usuario_2.password);
      cy.get('.custom-control-label').click();
      //cy.get('[name="a-yvjuivrtivb4"]').click();
      cy.get('form > .buttons > .button-1').click();
    });
  });

  it("Usuario 1", () => {
    cy.fixture("data").then((usuario) => {
      cy.get('[name="Email"]').type(usuario.usuario_1.email);
      cy.get('[name="Password"]').type(usuario.usuario_1.password);
      cy.get('.custom-control-label').click();
      cy.get('form > .buttons > .button-1').click();
    })
  })

});