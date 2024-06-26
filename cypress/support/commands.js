/// <reference types="Cypress"/>
import 'cypress-iframe';

Cypress.Commands.add("linkClick",(sometext)=>{
    cy.get("a").contains(sometext).click();
})
Cypress.Commands.add("custvisit",(url)=>{
    cy.visit(url);
})
Cypress.Commands.add("buttonClick",(sometext)=>{
    cy.get("button").contains(sometext);
})
Cypress.Commands.add("submitbtnclick",()=>{
    cy.get("[type='submit']").click();
})
Cypress.Commands.add("inputusername",(sometext)=>{
    cy.get("[name='username']").type(sometext);
})
Cypress.Commands.add("inputpassword",(sometext)=>{
    cy.get("[name='password']").type(sometext);
})