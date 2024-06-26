describe("domelements",()=>{
    beforeEach(()=>{
        //cy.visit("https://example.cypress.io/commands/traversal#") 
        cy.visit("https://example.cypress.io/commands/actions#")
    })
    it("method",()=>{
        //checkbox
        cy.get(".action-checkboxes [type='checkbox']").not('[disabled]').check();//space must
      cy.get(".action-checkboxes [type='checkbox']").should("be.disabled").check();//must come error
       cy.get(".action-checkboxes [type='checkbox']").should("be.disabled").check({force:true});
      //multiple checkbox
      cy.get(".action-multiple-checkboxes>.checkbox [type='checkbox']").not("[disabled]").check();
      //uncheck()
      cy.get('.action-check [type="checkbox"]').not('[disabled]').uncheck();
        //radiobutton
        cy.get(".action-radios>.radio [type='radio']").not('[disabled]').check();
       //select()
         cy.get(".action-select").select("apples");
         cy.get(".action-select").should("have.value","fr-apples");
         cy.get(".action-select-multiple").select(['fr-apples','fr-oranges','fr-bananas']);
    }) 
    it("scroll",()=>{
        //horizontal
        //cy.get("#scroll-horizontal button").should("not.be.visible")//before scroll notvisible the button ok
        //cy.get("#scroll-horizontal button").scrollIntoView();
        //cy.get("#scroll-horizontal button").should("be.visible")
        //cy.get("#scroll-horizontal button").should("not.be.visible")//after scroll visible so not ok
        //vertical
        //cy.get("#scroll-vertical button").should("not.be.visible")//before scroll notvisible the button ok
        //cy.get("#scroll-vertical button").scrollIntoView();
        //cy.get("#scroll-vertical button").should("be.visible")
        //cy.get("#scroll-vertical button").should("not.be.visible")//after scroll visible so not ok
        //both
        //cy.get("#scroll-both button").should("not.be.visible")//before scroll notvisible the button ok
        //cy.get("#scroll-both button").scrollIntoView()
        //cy.get("#scroll-both button").should("be.visible")
       // cy.get("#scroll-both button").should("not.be.visible")//after scroll visible so not ok
       //scrollto()
       cy.scrollTo("bottom")
       cy.get("#scrollable-horizontal").scrollTo("right");
       cy.get("#scrollable-vertical").scrollTo(560,670);
       cy.get("#scrollable-both").scrollTo("82%,45%");
       cy.get("#scrollable-both").scrollTo("center",{duration:4000});
       cy.get("#scrollable-vertical").scrollTo("center",{easing:'linear'})
    })
    it.only("trigger",()=>{
        cy.get(".trigger-input-range").invoke("val",70);
        cy.get(".trigger-input-range").trigger("change");
        cy.get(".trigger-input-range").get("input[type='range']").siblings("p").should("have.text",70);
        //if you give 40 you got error, so i give 70 bcs,invoke(stop) method stop the trigger(change value) work
    })
})