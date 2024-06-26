describe("google dropdown",()=>{
    it("login",()=>{
        cy.visit("https://example.cypress.io/");
        cy.get("a[role='button']").click();
        //cy.get(".dropdown-menu>li").should("have.length",25);{ it return error bcs,length have only 17}
        cy.get(".dropdown-menu>li").should("have.length",17);
        cy.get(".dropdown-menu>li:nth-child(5)>a").should("have.text","Viewport");
        cy.get(".dropdown-menu>li:nth-child(5)>a").should("have.attr","href");
        //cy.get(".dropdown-menu>li:nth-child(14)").click();
        cy.get(".dropdown-menu").contains("Spies, Stubs & Clocks");
        cy.url("").should("eql","https://example.cypress.io/");   
        cy.url("").should("include",'/example.cyp');       
     })//should=condition(must check)/ eql=must contain the given part
    })//contains=checking only(get)   
     //include=checking only (not a condition)(url) cy6-7c
