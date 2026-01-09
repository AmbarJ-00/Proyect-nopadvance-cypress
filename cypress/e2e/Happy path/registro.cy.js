import Links from "../../support/Pages/Links";

describe("primera suite", () => {
  beforeEach("repetir este link", () => {
    Links.RegistroPage();
  });

  it("Verificar que el formulario de registro puede ser llenado con los datos del usuario 1", () => {
    cy.fixture("data").then((usuario) => {
      cy.get('[name="FirstName"]').type(usuario.usuario_1.firstname);
      cy.get('[name="LastName"]').type(usuario.usuario_1.lastname);
      cy.get('[name="Email"]').type(usuario.usuario_1.email);
      cy.get('[name="ConfirmEmail"]').type(usuario.usuario_1.email);
      cy.get('[name="Company"]').type(usuario.usuario_1.company);
      cy.get('[name="City"]').type("santo domingo");
      cy.get('[name="CountryId"]').select("Aruba");
      cy.get('[name="StateProvinceId"]').select("Other");
      cy.get('[name="Phone"]').type(usuario.usuario_1.phone);
      cy.get('[name="Password"]').type(usuario.usuario_1.password);
      cy.get('[name="ConfirmPassword"]').type(usuario.usuario_1.password);
      cy.get(':nth-child(7) > .form-fields > .inputs > .custom-control-label').click();
      cy.get('[name="register-button"]').click();
    });
  });

  it("Verificar que el formulario de registro puede ser llenado con los datos del usuario 2", () => {
    cy.fixture("data").then((usuario) => {
      cy.get('[name="FirstName"]').type(usuario.usuario_2.firstname);
      cy.get('[name="LastName"]').type(usuario.usuario_2.lastname);
      cy.get('[name="Email"]').type(usuario.usuario_2.email);
      cy.get('[name="ConfirmEmail"]').type(usuario.usuario_2.email);
      cy.get('[name="Company"]').type(usuario.usuario_2.company);
      cy.get('[name="City"]').type("santo domingo");
      cy.get('[name="CountryId"]').select("Aruba");
      cy.get('[name="StateProvinceId"]').select("Other");
      cy.get('[name="Phone"]').type(usuario.usuario_2.phone);
      cy.get('[name="Password"]').type(usuario.usuario_2.password);
      cy.get('[name="ConfirmPassword"]').type(usuario.usuario_2.password);
      cy.get(':nth-child(7) > .form-fields > .inputs > .custom-control-label').click();
      cy.get('[name="register-button"]').click();
    });
  });
});