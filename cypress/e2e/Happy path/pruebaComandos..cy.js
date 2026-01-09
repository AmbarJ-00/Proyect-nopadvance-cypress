import Links from "../../support/Pages/Links";

describe("se va a probar diversos comandos que anteriormente no se han usado", () => {
    beforeEach("repeticion del home", () => {
        Links.StoreHomePage();
    });

    it("validacion de creacion de alias y su reutilizacion con el comando '.as'", () => {
    cy.get('img[title]').as('logo');
    cy.get('@logo').should('be.visible');
    });

    it.only("utilizacion del comando .children()", () => {
        cy.get('div [class]').should('be.exist');
        cy.get('div [class]').children();
    });

    it('.document()', () => {
        cy.get('').document();
    });

    it('.eq()', () => {
        cy.get().eq();
    });

    it('.filter()', () => {
        cy.get('').filter().should('be.exist');
    });

    it('.hash()', () => {
        cy.get('').hash();
    });

    it('.invoke()', () => {
        cy.get('').invoke();
    });

    it('.its()', () => {
        cy.get('').its();
    });

    it('.location()', () => {

    });

    it('.next()', () => {

    });

    it('.nextAll()', () => {
        cy.get('').nextAll();
    });

    it('.nextUntil()', () => {
        cy.get('').nextUntil()
    });

    it('.not()', () => {
   cy.get('').not();
    });

    it('.parent()', () => {
        cy.get('').parent();
    });

    it('.parents()', () => {
        cy.get('').parents();
    });

    it('.parentsUntil()', () => {
        cy.get('').parentsUntil();	
    });

    it('.root()', () => {
        cy.get('').root();
    });

    it('.shadow()', () => {
        cy.get("").shadow();
    });

    it('.siblings()', () => {
        cy.get('').siblings();
    });

    it('.window()', () => {
        cy.get('').window();
    });

    it('.trigger()', () => {
        cy.get('').trigger();
    });

    it('.selectFile()'), () => {
        cy.get().selectFile();
    }

    it('.each()', () => {
        cy.get('').each();
    });

    it('.exec()', () => {
        cy.get('').exec();
    });

    it('.fixture()', () => {
        cy.fixture();
    });

    it('.go()', () => {
        cy.get('').go();
    });

    it('.log()', () => {
        cy.get('').log();
    });

    it('.origin()', () => {
        cy.get('').origin()
    });

    it('.prompt()', () => {
        cy.prompt();
    });

    it('.spread()', () => {
        cy.get('').spread();
    });

    it('.then()', () => {
        cy.get('').then();
    });

    it('.wait()', () => {
        cy.wait();
    });
})