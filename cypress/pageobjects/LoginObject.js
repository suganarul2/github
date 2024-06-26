class login{
    setusername(username){
        cy.get('[placeholder="Username"]').type(username)
    }

    setpassword(password){
        cy.get('[placeholder="Password"]').type(password)
    }//its a dynamic password,and username its will be change in further to export 
    buttonclick(){
        cy.get("[type='submit']").click()
    }
}
export default login;