describe("google dropdown",()=>{
    it("search",()=>{
        cy.visit("https://www.google.com/"); 
    cy.get("#APjFqb").type("sachin");
     cy.get(".wM6W7d > span").each(($el)=>{
        if($el.text()==="sachin pilot"){
            cy.wrap($el).click();
        }
     })//wrap=just take the value from $el and click
})
})//#HFKcI > .wM6W7d > span > b#HFKcI > .wM6W7d > span > b
it("wikepedia",()=>{
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("modi");
    cy.get(".suggestions-dropdown .suggestion-title").each(($data)=>{
        if($data.text()==="Modi script"){
            cy.wrap($data).click();
        }
    })
})
it("swiggy",()=>{
    cy.visit("https://www.swiggy.com/city/chennai/");
    cy.get(".iZzjyG > .sc-beySbM").type("chicken");
    cy.get(".cEwZMU > button").each(($el)=>{
        if($el.text()==="tandoori chicken"){
            cy.wrap($value).click();
        }
    })
})//style__ItemContainer-sc-k5vz9k-0 cEwZMU,style__ItemContainer-sc-k5vz9k-0 cEwZMU
it("search",()=>{
    cy.visit("https://datatables.net/extensions/responsive/examples/styling/bootstrap5.html");
    // 1st select all table rows ,then select the specific data collection further(1st with out index ,then with index)
    cy.get("#example>tbody>tr").each(($rows,tabindex)=>{;
      cy.wrap($rows).within(()=>{
        //1 st select all td (get),then select specific data from the table
        cy.get("td").each(($value,Index)=>{
            cy.log($value.text(),Index);
        })
       }) 
     })
})
it.only("search",()=>{
    cy.visit("https://datatables.net/extensions/responsive/examples/styling/bootstrap5.html");
    // 1st select all table rows ,then select the specific data collection further(4th row 4th data collect)
    cy.get("#example>tbody>tr:nth-child(4)").each(($rows,tabindex)=>{;
      cy.wrap($rows).within(()=>{
        //1 st select all td (get),then select specific data from the table
        cy.get("td:nth-child(4)").each(($value,Index)=>{
            cy.log($value.text(),Index);
        })
       }) 
     })
})//output london,0
it("search",()=>{
    cy.visit("https://datatables.net/extensions/responsive/examples/styling/bootstrap5.html");
    // (10th row 5th data collect)
    cy.get("#example>tbody>tr:nth-child(10)").each(($rows,tabindex)=>{;
      cy.wrap($rows).within(()=>{
        //1 st select all td (get),then select specific data from the table
        cy.get("td:nth-child(5)").each(($value,Index)=>{
            cy.log($value.text(),Index);
        })
       }) 
     })
})//output 22,0 cy5,6-6,7c

      
      
