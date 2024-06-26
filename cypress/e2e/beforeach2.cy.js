describe("Google Dropdown",()=>{
//when u r using 2nd class must create beforeeach() hook function 
beforeEach(()=>{
    cy.visit("https://example.cypress.io/commands/querying"); 
})
    it("login",()=>{
        //cy.visit("https://example.cypress.io/commands/querying"); 
        cy.get('#query-btn').should('contain','Button');
        cy.get('.example').should('have.class','example');
        cy.get('.example').should('have.attr','data-test-id');
        cy.get('.example').contains('data-test-id');
    })// here class=example.:.(.example /#example is must use)
    it("Another test",()=>{
         cy.get('.query-list').contains('bananas').should('have.class', 'third');
         
    })
    it("form asssrtion",()=>{
        cy.get(".query-form").within(()=>{
            //input email,password are in id so must use #
            cy.get("#inputEmail").type("admin");
            cy.get("#inputPassword").type("password");
            cy.get("#inputEmail").should("have.attr","placeholder","Email");
            cy.get("#inputPassword").should("have.attr","placeholder","Password");
        })
    })
    it.only("root check",()=>{
       cy.root().should("match","html");     
    })
})