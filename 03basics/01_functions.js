// function asif(){
//     console.log("a");
//     console.log("s");
//     console.log("i");
//     console.log("f");
// }
// asif()

// function add(number1, number2){
//     console.log(number1 + number2)
// }
// const result = add(2,5)
// console.log(result)  //output = Indefined

// function multiplyTwoNum(number1, number2){
//     // let result = number1 * number2
//     // return result
//     return number1 * number2
// }
// const result1 = multiplyTwoNum(3,4)

// // console.log("result=",result1);

// function userData(userName){
//     return `${userName} loggin`
// }
// console.log(userData("Asif"));

function condition (data){
    if(data===undefined){
        console.log("please enter your Name")
        return
    }
    
    return `your name is ${data}`
    
}

// console.log(condition()); OutPut = undefined
// console.log(condition("Asif Ansari"));

function cartPriceCalculate(val1,val2,...num1){
    return num1
}
// console.log(cartPriceCalculate(2345,2423,12,32,64));

// const userData = {
//     userName: "Asf",
//     price: 123
// }

// function object(anyobject){
//     console.log(`user name is ${anyobject.userName} and price is ${anyobject.price}`);
//     return
// }
// object({
//     userName:"Ais",
//     price: 1234
// })

// const newArry = [12,32,2345,5,123546,124]

function arryThirdValue (numOfArry){
    return numOfArry[4]
}


// console.log(arryThirdValue(newArry));
console.log(arryThirdValue([
    23,13,24,35,23,2342,2423
]))
