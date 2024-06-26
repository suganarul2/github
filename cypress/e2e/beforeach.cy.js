describe("google dropdown",()=>{
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type("admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
    })//note: don't put (,) to after beforeEach(beforeEach,-is wrong)
    it("login",()=>{
        //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
          //cy.get("[placeholder='Username']").type("admin");
         //cy.get("[placeholder='Password']").type("admin123");
        //cy.get("button[type='submit']").click();
        cy.get("img.oxd-userdropdown-img").click();
    })
    it("search",()=>{
       // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //cy.get("[placeholder='Username']").type("admin");
        //cy.get("[placeholder='Password']").type("admin123");
        //cy.get("button[type='submit']").click();
        cy.get("input[placeholder='Search']").type("cypress");
    })
})
//therefore,doesn't give each time to give the login purpose to each blog,otherwise i will give at once in before each.
//cy6-7c