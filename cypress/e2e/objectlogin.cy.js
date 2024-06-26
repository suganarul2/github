import login from "../pageobjects/loginobject";
let newlogin = new login();
  beforeEach("",()=>{
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})
//must give only ..not --,not must give space in before(..)
describe("Page Object Model",()=>{
    it.only("POM",()=>{
        //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //let newlogin = new login();
        newlogin.setusername("Admin");
        newlogin.setpassword("admin123")
        newlogin.buttonclick()
    })
    it("POM1",()=>{
        //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //let newlogin = new login();
        newlogin.setusername("mercury")
    })
    it("POM2",()=>{
        //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //let newlogin = new login();
        cy.wait(2000);
        newlogin.setusername("venus")
    })
    it("POM3",()=>{
        //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //let newlogin = new login();
        cy.wait(2000);
        newlogin.setusername("earth")
    })
})