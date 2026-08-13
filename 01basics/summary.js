// DATA TYPES
// data rtypes are two types
// 1. primitive data types
// 2. Non Primitive(Referance)data types

// PRIMITIVE DATA TYPES
// primitive data types are 7 type
//string,number,boolean,null,undefined,symbol,bigInt;

const name = 123
const score = 231
const isSignin = true
const isTemprature = null
let future;
const myFriendsName = Symbol('Asif')
const myName = Symbol('Asif')
const bigInt = 12345678901234165456431544321n

console.table({name,score,isSignin,isTemprature,future,myFriendsName,myName,bigInt});


//NOT PRIMITIVE DATA TYPES
// array,functions,objects


const myFnctions = function(){
    name = "asif"
    age = 20
}

//stack & hipe

// stack is used for primiive data types
// hipe is use for non primitive or reference data types

// stack

let yourName = "kaif"

let Name = yourName

yourName = "asif"


console.log (yourName);
console.log (Name);

//Hipe

let userOne = {
    name: "aman",
    email: "aman@gmail.com",
    age: 20
}

console.log (userOne);

userTwo = userOne

console.log(userTwo);

userTwo.name = "arif"
userOne.age = 25
console.log(userOne);
console.log(userTwo);