//describe("Trigger",()=>{
    //it("check",()=>{
      // cy.viewport(1920,1080)
        //cy.visit("https://www.aimoretechnologies.com/");
        //cy.get('#menu-item-778 > [href="#"]').trigger("mouseover");
        //cy.wait(2000)
   // })
//})
describe("GET API",()=>{
    it("GET CALL",()=>{
        cy.request({
            method:"GET",
            url:"https://665b6830003609eda460cb5c.mockapi.io/users/3"
          })
        .then((res)=>{
            //cy.log(res)
            expect(res.status).to.eq(200)
        })
    })
    it("POST CALL",()=>{
        cy.request({
            method : "POST",
            url:"https://665b6830003609eda460cb5c.mockapi.io/users",
            body : {
                name : "mercury"
            }//add these steps
        })
        .then((res)=>{
            expect(res.status).to.eq(201)
        })
    })
    it("GET BY ID",()=>{
        cy.request({
            method : "GET",
            url : "https://665b6830003609eda460cb5c.mockapi.io/users/2"
        })
        .then((res)=>{
            expect(res.status).to.eq(200)
            //check further details also
            expect(res.body).to.have.property("name")
            expect(res.body).to.have.property("id")
            expect(res.body.name).to.eq("mercury")
        })    
    })
    it("DELETE",()=>{
        cy.request({
            method : "DELETE",
            //try another one
            //url : "https://665b6830003609eda460cb5c.mockapi.io/users/2"
           url : "https://665b6830003609eda460cb5c.mockapi.io/users/9"
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property("name")
            expect(res.body).to.have.property("id")
            expect(res.body.name).to.eq("Clayton Krajcik")
        })
    })
    it("PUT CALL",()=>{
        //change the value
        cy.request({
            method : "PUT",
            url : "https://665b6830003609eda460cb5c.mockapi.io/users/6",
            //url : "https://665b6830003609eda460cb5c.mockapi.io/users/8",
            body : {
                name : "mars1"
                //name : "earth"
            }
        })
        .then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property("name")
            expect(res.body).to.have.property("id")
            expect(res.body.name).to.eq("mars1")
            //(res.body.name).to.eq("earth")
        })
    })
    it("GET CALL",()=>{
        cy.request({
            method : "GET",
            url : "https://jsonplaceholder.typicode.com/users/1"
        })
        .then((res)=>{
            expect(res.status).to.eq(200)
            //further check
            expect(res.body).to.have.property("username")
            expect(res.body.username).to.eq("Bret")
            expect(res.body.address).to.have.property("city")
            expect(res.body.address.city).to.eq("Gwenborough")

        })
    })
    it.only("NEWS",()=>{
        cy.request({
            method : "GET",
            //url :"https://reqres.in/api/users"
            url :"https://reqres.in/api/users/1"
        })
        .then((res)=>{
            //cy.log(res.body)
            //cy.log(res.body.total_pages)
            //cy.log(res.body.data)
        // cy.log(res.body.data.first_name).to.eq("George")(doubt)
            
        })
    })
})