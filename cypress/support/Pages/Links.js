class Links{

    StoreHomePage(){
        cy.visit('https://store.nopadvance.com/');
    }

    PlugginsPage(){
        cy.visit('https://store.nopadvance.com/nopcommerce-plugins');
    }

    ForosPage(){
        cy.visit('https://store.nopadvance.com/boards');
    }

    ThemesPages(){
        cy.visit('https://store.nopadvance.com/nopcommerce-themes');
    }

    ShoppinCarPage(){
        cy.visit('https://store.nopadvance.com/cart');
    }

    RegistroPage(){
        cy.visit('https://store.nopadvance.com/register');
    }

    LoginPage(){
        cy.visit('https://store.nopadvance.com/login');
    }
}


export default new Links();