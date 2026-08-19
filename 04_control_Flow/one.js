// If

 /*const isUserLoggedIn = false

 if (isUserLoggedIn) {
    console.log("Execuited");
 }*/

 // < , > , <= , >= , == , != , === 

 /*const termprature = 50

 if(termprature < 40){
   console.log("tem is normal");
 } else {
   console.log("temp is High");
 }*/
/*
 const score = 80

 if(score > 100){
   let power = "water bending"
   console.log(`you power is ${power}`)
 }else{
   console.log(`you are not elegible to collect power`);
 }
 */
/*
 const balance = 1001
 //if ( balance > 999) console.log("this is to usefull");

 if(balance < 500){
   console.log("less then 500")
 }
 if(balance < 600 ){
   console.log("less then 600")
 } else {
   console.log("less then 1001")
 }
 */

const userLoggedIn = true
//let userLoggedIn = false
const debitCard = true
const loggedInfromGoogle = true /*false*/
const loggedInFromEmail = false // true
 if( userLoggedIn && debitCard){
   console.log(`you are eligible to buy`);
 }else{console.log("you are not eligible to buy")}

 if(loggedInFromEmail || loggedInfromGoogle){
   console.log(`You are Logged In`);
 }else{
   console.log("loggin Fail");
 }
