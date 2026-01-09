import Links from "../../support/Pages/Links";

describe("primera suite", () => {
  beforeEach("repetir este link", () => {
    Links.StoreHomePage();
  });

it('Vefiricacion de enlaces en pie de pagina', () => {
  cy.get('div.customer-service a').click();
  cy.get('img.not-sticky').click();
  cy.get('a[href="/customer/info"]').click();
  cy.get('img.not-sticky').click();
  cy.get('a[href="/order/history"]').click();
  cy.get('img.not-sticky').click();
  cy.get('div.my-account li:nth-child(3) a').click();
  cy.get('img.not-sticky').click();
  cy.get('div.customer-service a').click();
  cy.get('img.not-sticky').click();
  cy.get('a[href="/vendortermsofservice"]').click();
  cy.get('img.not-sticky').click();
  cy.get('a[href="/eula"]').click();
  cy.get('img.not-sticky').click();
  cy.get('a[href="/privacy-notice"]').click();
  cy.get('img.not-sticky').click();
  
  })

it.only('Verificacion de botones y enlaces principales', () => {
  cy.get('img.not-sticky').click();
  cy.get('ul.notmobile li:nth-child(1) a').click();
  cy.get('ul.notmobile li:nth-child(2) a').click();
  cy.get('img.not-sticky').click();
  cy.get('ul.notmobile li:nth-child(3) a').click();
  cy.get('img.not-sticky').click();
  cy.get('ul.notmobile li:nth-child(4) a').click();
  cy.get('img.not-sticky').click();
  cy.get('div:nth-child(1) > div.category-item > h2.title > a > span').click();
  cy.get('img.not-sticky').click();
  cy.get('div:nth-child(2) > div.category-item > h2.title > a > span').click();
  cy.get('img.not-sticky').click();
  cy.get('div:nth-child(3) > div.category-item > h2.title > a > span').click();
  cy.get('#nivo-slider a[href="https://store.nopadvance.com/nopcommerce-plugins/automobile-spare-parts-and-fitment-nopcommerce-plugin"]').click();
  cy.get('img.not-sticky').click();
  cy.get('[name="q"]').click();
  cy.get('[name="q"]').type('hola{enter}');
  cy.get('#small-search-box-form button.search-box-button').click();
  cy.get('img.not-sticky').click();
  cy.get('div.header-links-wrapper li:nth-child(5) a.ico-register').click();
  cy.get('img.not-sticky').click();
  cy.get('div.header-links-wrapper li:nth-child(6) a.ico-login').click();
  cy.get('img.not-sticky').click();
  cy.get('div.header-links-wrapper span.cart-label').click();
  cy.get('img.not-sticky').click();
  });

});
