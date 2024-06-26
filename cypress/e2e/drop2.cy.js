describe("google dropdown", () => {
    it("search", () => {
        cy.visit("https://datatables.net/extensions/rowreorder/examples/styling/bootstrap5.html");
        cy.get("#example>tbody>tr").each(($value) => {
            //tr have 16 items,table,tbody,tr,td(each)
            cy.wrap($value).within(() => {
                cy.get("td").each(($sign) => {
                    cy.log($sign.text());
                })
            })
        })
    })
})
it("font search", () => {
    cy.visit("https://datatables.net/examples/basic_init/multiple_tables.html");
    //table,thead,tr,th(each)
    cy.get("#DataTables_Table_0>thead>tr>th").each(($num) => {
        cy.log($num.text());
        //and text length
        cy.log($num.length);
    })
})
it("font search", ()=> {
    cy.visit("https://datatables.net/examples/basic_init/multiple_tables.html");
    cy.get("#DataTables_Table_0>thead>tr>th").each(($num) => {
        //table,thead,tr,th(all)
        cy.log($num.text());
    })//value and value with index
    cy.get("#DataTables_Table_0>tbody>tr").each(($n, index) => {
        // cy.log($n.length);
        cy.wrap($n).within(() => {
            cy.get("td").each(($nu, index) => {
                cy.log($nu.text(), index);
            })
        })
    })//get= get the values from given part
})//wrap= just an intermediate to collect values and return to get (get to get)
//log= refer to table cell cy6-7c