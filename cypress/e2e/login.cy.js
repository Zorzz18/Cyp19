/// <reference types="Cypress" />

describe("login tests", () => {
        it("login with unregistered user", () => {
            cy.visit("https://gallery-app.vivifyideas.com/");
            cy.get("a[href='/login']").click();
            cy.get("#email").type("random@mail.com");
            cy.get("#password").type("123djordje");
            cy.get("button").click();
            cy.url().should("contain", "/login");

        });



        it("register without email adrdress provided", () =>  {
            cy.visit("https://gallery-app.vivifyideas.com/");
            cy.get("a[href='/login']").click();
            cy.get("#password").type("123djordje");
            cy.get("button").click();
            cy.url().should("contain", "/login");

        });




        it("register without password provided" , () =>  {
            cy.visit("https://gallery-app.vivifyideas.com/");
            cy.get("a[href='/login']").click();
            cy.get("#email").type("djordje123@gmail.com");
            cy.get("button").click();
            cy.url().should("contain", "/login");


        });

















    it ("login with valid credentials", () => {
        cy.visit("/login");
        // cy.get("a[href='/login']").click();
        cy.get(" .nav-link").eq(1).click();
        cy.get("#email").type("djordje123@gmail.com");
        cy.get("#password").type("123djordje");
        cy.get("button").click();
        cy.url().should("not.contain", "/login");
        
    });

    it.only("logout", () => {
        cy.visit("/");
            cy.get(".nav-link").eq(1).click();
            cy.get("#email").type("djordje123@gmail.com");
            cy.get("#password").type("123djordje");
            cy.get("button").click();
            cy.url().should("not.contain", "/login");
            cy.get(".nav-link").eq(3).click();
    });




});

{
/*<a data-v-4295d220="" href="/login" class="nav-link nav-buttons">
            Login
          </a>; */
}


