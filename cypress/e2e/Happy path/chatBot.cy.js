
import Links from "../../support/Pages/Links";

describe("Suite de pruebas", () => {
    beforeEach("Pagina de inicio", () => {
     Links.StoreHomePage();
    });

    it("Test para probar el chat bot", () => {
        cy.contains('buttom', "online").click();
    })
});