describe("login senario",()=>{
    it("login",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode");
        //forgot pwd
        cy.get("login-forgot > .oxd-text").click();
        cy.url().should("ëql","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("[.oxd-input]").type("orange is tasty");
        cy.get(".oxd-button--ghost").click();
        cy.url().should("include","opensource-demo.orangehrmlive");
//login-forgot > .oxd-text
    })
})//url check using should(include, eql)cy2-4c