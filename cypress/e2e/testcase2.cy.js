describe("Login Senario",()=>{
    it("login",()=>{
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
         cy.get("[placeholder$='Username']").type("admin");
         cy.get("[placeholder$='Password']").type("admin123"); 
         cy.get("[type$='submit']").click();  
         // check header contain (dashboard or not) and must (visible or not) 
              cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should("have.text", "Dashboard");
              cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should("not.be.visible");
})
})//https://www.swiggy.com/cy3-4c