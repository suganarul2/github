describe("Google Dropdown",()=>{
    beforeEach(()=>{
        //cy.visit("https://example.cypress.io/commands/traversal#") 
        cy.visit("https://example.cypress.io/commands/actions#")
    })
    //children(),eq(),filter()
    it("Children",()=>{
        cy.get(".traversal-breadcrumb.breadcrumb").children(".active").should("contain","Data");
        cy.get(".traversal-list>li").eq(2).should("contain","persian");
        cy.get(".traversal-list>li").eq(4).should("contain","burmese")
        cy.get(".traversal-nav.nav.nav-tabs li").filter(".active").should("contain","About")
        //semicolon is not must,andthen >li is not must, but .using class and further step is must
    }) 
    //find(),first(),last()
    it("search",()=>{
        cy.get(".pagination.traversal-pagination").find("li").find("a").should("have.length",7)
        //cy.get(".pagination.traversal-pagination").find("li").find("a").should("have.length",3)(not 3 found only 7)
        cy.get(".table.traversal-table").first().should("contain","1")   
        cy.get(".table.traversal-table").first().should("contain","Lane")   
        cy.get(".traversal-buttons .btn").last().should("contain","Submit")
    })
    //next()
    it("next",()=>{
        //cy.get(".traversal-ul").contains("apples").next().should("contain","oranges") 
        //cy.get(".traversal-ul").contains("oranges").next().should("contain","bananas")
        //nextall(), next()
       // cy.get(".traversal-next-all").contains("apples").nextAll().should("have.length",4)
        //cy.get(".traversal-next-all").contains("pineapples").next().should("contain","grapes")
        cy.get("#veggies").nextUntil("#nuts").should("have.length",3)
    })//not() parent(),parents(),parentsUntil(),prev(),prevAll(),prevUntil(),siblings()
    it("elements",()=>{
         cy.get(".traversal-disabled .btn").not("[disabled]").should("not.contain","Disabled")
         cy.get(".traversal-mark").parent().should("contain","Morbi leo risus")
         cy.get(".traversal-cite").parents().should("match","blockquote")
         cy.get(".clothes-nav").find(".active").parentsUntil(".clothes-nav").should("have.length",2)
         cy.get(".birds").find(".active").prev().should("contain","Lorikeets")
         cy.get(".fruits-list").find(".third").prevAll().should("have.length",2)
         cy.get(".foods-list").find("#nuts").prevUntil("#veggies").should("have.length",3)
         cy.get(".traversal-pills .active").siblings().should("have.length",2)
    })//must give space (.traversal-disabled .btn)
    //clear(),wait(),delay()
    it("Email",()=>{
        //cy.visit("https://example.cypress.io/commands/actions#")
        cy.get("#email1").type("job@gmail.com").clear();
        cy.wait(4000)
        cy.get(".form-control.action-disabled").should("have.attr","disabled")
        cy.get("#email1").type("job@gmail.com",{delay:500})
    })//for-use #email1,next(),submit()blur(error),type(),focus()
    it("ficus method",()=>{
        //cy.get("#password1").focus();
        //cy.get("#password1").should("have.class","focus");
        //cy.get("#fullName1").type("it's ok")
        //cy.get("#fullName1").blur();
        //cy.get("#fullName1").should("have.class","error")
        cy.get(".action-form").submit();
        cy.get(".action-form").next().should("contain","Your form has been submitted!")
    })//click(),dblclick(),rightclick()
    it.only("canvas",()=>{
        //cy.get("#action-canvas").click("center");
        //cy.get("#action-canvas").click("left");
        //cy.get("#action-canvas").click("top")
        //cy.get("#action-canvas").click("topLeft");
       // cy.get("#action-canvas").click("bottomRight");
        //cy.get("#action-canvas").click(80, 75)
           //cy.get(".action-div").dblclick()
           //cy.get(".action-div").should("not.be.visible")
           //cy.get(".action-input-hidden").should("be.visible")
        cy.get(".rightclick-action-div").rightclick()
        cy.get(".rightclick-action-div").should("not.be.visible")
        cy.get(".rightclick-action-input-hidden").should("be.visible")
        cy.get(".rightclick-action-input-hidden").should("have.attr","value");
        cy.get(".rightclick-action-input-hidden").should("have.value","Right click to edit")
        })
}) 

