// singleton

// objects literals
const mySym = Symbol("key1");
const myObject = {
    name:"Asif",
    age:18,
    [mySym]: "myKey1",
    email:"asif@google.com",
    mobile:830036002900650,
}
// Object.freeze(myObject)
// myObject.email= "asif123@gmail.com"
// console.log(myObject);

myObject.greeting = function (){
    console.log("Hello World");
}
console.log(myObject.greeting());
myObject.greetingTwo = function (){
    console.log(`This is my email = ${this.email}`)
}

console.log(myObject.greetingTwo());