describe("login senario",()=>{
    it("login",()=>{
        cy.visit("http://www.wikipedia.org/");
        cy.get("#searchInput").type("mumbai");
        cy.get(".suggestions-dropdown a").should("have.length",6);
    })//dropdown-a= length(lists) count checking
    it("google",()=>{
          cy.visit("https://www.google.com/");
        cy.get("#APjFqb").type("chennai");
        cy.get("div[class='OBMEnb'] ul[role='listbox'] li").should("have.length", 10);
    })//OBMEnb,listbox
    //div>ul>li= list lengthcount checking
    it("application dropdown",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.get('#select2-billing_country-container').click();
        cy.get("input[role='combobox']").type("Iran{enter}");        
    })//just type iran in combobox
})//suggestions-dropdown cy2-4c