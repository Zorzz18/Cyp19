import { loginPage } from "../page_objects/loginPage";
import { allGalleriesPage} from "../page_objects/allGalleries";

describe("all galleries page tests", () => {
    before("visit gallery app and log in", () => {
        cy.visit("/login");
        loginPage.login("nedovic.filip@gmail.com", "Test12345");
        cy.url().should("not.include", "/login");
     });

     it("all galleries successfully loaded", () => {
        allGalleriesPage.allGalleriesHeading
            .should("be.visible")
            .and("have.text", "All Galleries");
     })
})