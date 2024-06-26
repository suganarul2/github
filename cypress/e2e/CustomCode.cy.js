describe("Custom Sample",()=>{
    it("custom commands",()=>{
        //cy.visit("https://demo.opencart.com/");
        cy.custvisit("https://demo.opencart.com/");
        cy.linkClick("MacBook");
    })
    it("custom commands2",()=>{
        cy.visit("https://demo.opencart.com/");
        cy.linkClick("iPhone");
    })
    it("custom commands3",()=>{
        cy.visit("https://demo.opencart.com/");
        cy.linkClick("Software");
    })
    it("button",()=>{
        cy.visit("https://getbootstrap.com/docs/4.0/examples/pricing/");
        cy.buttonClick("Get started");
        cy.linkClick("Team feature");
    })
    it.only("submitclick",()=>{
        cy.custvisit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.inputusername("Admin");
        cy.inputpassword("admin123")
        cy.submitbtnclick();
        cy.linkClick("Claim");
        cy.linkClick("Time");
    })

})