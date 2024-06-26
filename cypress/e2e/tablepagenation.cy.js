describe("pagination",()=>{
    beforeEach(()=>{
        cy.visit("https://datatables.net/examples/styling/bootstrap4");
    })
    it("table",()=>{
        let pages=10;
        for(let p=1;p<pages;p++){
            cy.log("page Number Is...........",p)
            cy.get(".pagination>li:nth-child("+p+")").click();
            cy.wait(1000);
            cy.get("#example>tbody>tr").each(($row)=>{//when i use (tr) tag then continously i use (cy.wrap()) method to get the details
                cy.wrap($row).within(()=>{
                    cy.get("td").each(($td)=>{
                        cy.log($td.text());
                    })
                })
            })
        }
    }) 
})