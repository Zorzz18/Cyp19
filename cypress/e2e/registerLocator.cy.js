/// reference types="Cypress" />
const locators = require("../fixtures/locators.json");
import { faker } from '@faker-js/faker';

describe("register tests with locators", () => {
    const userData = {
        randomfirstName: faker.name.firstName(),
        randomlastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(8, true) + 1,
        randomPasswordWithoutNumber: faker.internet.password(8, true, "^[a-zA-Z0-9_]*$"),
        shortPassword: faker.internet.password(2),
        randomEmailWithoutMonkey: faker.internet.email().replace('@', '')

    };
    const randomPassword = faker.internet.password(8, true) + 1;
    const randomlastName = faker.name.lastName();
    const randomfirstName = faker.name.firstName();
    const randomEmail= faker.internet.email();
    beforeEach("visit gallery app and click on the register link", () => {
        cy.visit("/");
        cy.get(locators.commonFormElements.navbarLink).eq(2).click();
    });
  it("register without last name provided", () => {
    cy.get(locators.registerPage.firstNameInput).type("Filip");
    cy.get(locators.commonFormElements.emailInput).type("test-f@mail.com");
    cy.get(locators.commonFormElements.passwordInput).type("Test12345");
    cy.get(locators.registerPage.passwordConfirmationInput).type("Test12345");
    cy.get(locators.registerPage.tcCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("include", "/register");
  });

  it("register without number in password", () => {
    cy.get(locators.registerPage.firstNameInput).type("Filip");
    cy.get(locators.registerPage.lastNameInput).type("Nedovic");
    cy.get(locators.commonFormElements.emailInput).type("test-f@mail.com");
    cy.get(locators.commonFormElements.passwordInput).type("TestTestTest");
    cy.get(locators.registerPage.passwordConfirmationInput).type("Test12345");
    cy.get(locators.registerPage.tcCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("include", "/register");
  });

  it("register with spaces in email address", () => {
    cy.get(locators.registerPage.firstNameInput).type("Filip");
    cy.get(locators.registerPage.lastNameInput).type("Nedovic");
    cy.get(locators.commonFormElements.emailInput).type("test-f @mail.com");
    cy.get(locators.commonFormElements.passwordInput).type("Test12345");
    cy.get(locators.registerPage.passwordConfirmationInput).type("Test12345");
    cy.get(locators.registerPage.tcCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("include", "/register");
  });

  it("register with valid data using locators", () => {
    const randomPassword = faker.internet.password(8, true) + 1;
    const randomlastName = faker.name.lastName();
    const randomfirstName = faker.name.firstName();
    const randomEmail= faker.internet.email();

    cy.get(locators.registerPage.firstNameInput).type(userData.randomfirstName);
    cy.get(locators.registerPage.lastNameInput).type(userData.randomlastName);
    cy.get(locators.commonFormElements.emailInput).type(userData.randomEmail);
    cy.get(locators.commonFormElements.passwordInput).type(userData.randomPassword);
    cy.get(locators.registerPage.passwordConfirmationInput).type(userData.randomPassword);
    cy.get(locators.registerPage.tcCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("not.include", "/register");
  });
});