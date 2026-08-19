const userEmail = "ASif@google.com"// if run 
//const userEmail = ""// else run
//const userEmail = []


if(userEmail){
    console.log("Got user Email");
} else {
    console.log("Don't have user Email");
}

// -----Falsy values----

//false, 0, -0, BigInt 0n, "", undefined,NaN

// -----truthy values-----
// "0" , 'false' ," ", [], {}, function(){}

//const userArray = [1]

//if(userArray.length === 0){
//    console.log("Array is empty");
//} else {console.log("array is live");}

const emptyObject = { user:  "ASif"}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 3??5
//val1 = null ?? 20
//val1 = undefined ?? 38
//val1 = null ?? undefined ?? 10
console.log(val1);

//------Terniary Operator----

//condition ? true : false
 
const dream =60

dream <=60 ? console.log("value is under 61"): console.log("value is more then 60")

