describe("screenshots",()=>{
    it("screenshots and video",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //cy.get("#app").screenshot();//login spelling wrong bcs,i want screenshotsand video
        cy.get("[name='username']").type("admin");
        //cy.get("[name='password']").type("Ämine123");
        cy.get("[name='password']").type("Ädmin123");
        cy.get("button[type='submit']").click();
        //cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").type("dashboard");
        //cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text","Dashboard");
        cy.get(".oxd-input.oxd-input--active").should("have.attr","placeholder");
    
       // cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text","sample");//just for checking only
    })// to take screenshots and video(this is wrong senario)
    it.only("particular area screenshots",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("img[alt='company-branding']").screenshot('particulararea')
    })
})