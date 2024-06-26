describe("first testcase",()=>{
    it("sample run",()=>{
        cy.visit("https://www.google.com/");
        cy.title().should("eql","Google"); 
        cy.get("body").type("chennai super kings{enter}");
    })
    it.only("second testcase",()=>{
        cy.visit("https://www.swiggy.com/city/chennai");
        cy.get('.iZzjyG > .sc-beySbM').type("chicken briyani{enter}");
    })          //=>in get must use single cot('' for dot values)
})//just visit and get the value(cy1-3c)