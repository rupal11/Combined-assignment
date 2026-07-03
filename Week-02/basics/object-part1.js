// object can be declared using two ways 
//     string literals (like we decalare a variable)
    // Object.create() //creats a sinngleton object

// obect keys can be Number, string but are automatically converted into strings under the hood, cn be wih double questoes or without, automatically converts

//access object properties using . and []

// object can have both properties and function

let mySym= Symbol("key2")

let user={
    name: "abcd",
    organization:"xyz",
    email: "pqr@testemail.com",
    daysLoggedIn:["monday","tuesday"],
    "full name": "abcd das",
    [mySym]: "key2"    //symbol are assigned to object like this 

}

console.log(user);

//access data
console.log(user.name);
console.log(user["full name"]);
console.log(user[mySym])


// to change data
user.email="fsdfdf"

//freeze data
// Object.freeze(user)


//assigning function
user.greeting=function(){
    console.log("hello")
    console.log(`Hello , ${this.name}`) //back ticks, string interpolation  //this points to current object
}

console.log(user.greeting);  //prints [Function (anonymous)]
console.log(user.greeting()); //runs function

