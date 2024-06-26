describe("fixture test data",()=>{
    let anotherData;
    let userdata;
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture("samplelog").then((data)=>{
            userdata = data;
    })
        cy.fixture("example.json").then((data1)=>{
            // cy.log("---example---");
            //cy.log(data1)
            //cy.log( data1.email)
            anotherData = data1;
        })
})
    it("Test Driven",()=>{
            //cy.fixture("samplelog").then((data)=>{
            //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get("[placeholder='Username']").type( userdata.username);
            cy.get("[placeholder='Password']").type( userdata.password);
            cy.get("[type='submit']").click();
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", userdata.checktest);    
            })
        //copy and paste for beforeeach and add letusername var
    it("Test Driven",()=>{
        //cy.fixture("samplelog").then((data)=>{
        //  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //change the data will be userdata
         cy.get("[placeholder='Username']").type( userdata.username);
         cy.get("[placeholder='Password']").type( userdata.password);
         cy.get("[type='submit']").click();
         cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", userdata.checktest);    
         })
    it.only("Another test data",()=>{
        cy.log(anotherData.name);
        cy.log(anotherData.email);
        cy.log(anotherData.body);
    })     
})


 
    
    
