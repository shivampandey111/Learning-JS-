function SetuserName(username){
    this.username = username;
    console.log('hello')
}
function createUser(username, email, pass){
    SetuserName.call(this, username)             
    //without using call and this, it would just be a normal function call and this inside above function will not point to the username here
    //call runs the function and set its this to the current object 
    //call calls the function immediately with a custom this value. It is essentially saying do the work inside this object
    //Function does not share this automatically, call is used to control it  

    this.email = email;
    this.pass = pass;

}
const user = new createUser("shivam", "a@gmail.com", "123")