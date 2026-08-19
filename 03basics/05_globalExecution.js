//1= global Execution Context
//2= Function Execution Context
//3= Eval Execution Context

const { useContext } = require("react")

//-------Global Execution Context------

// global execution context => this

//memory creation phase or memory phase or creation phase

let val1 = 4
let val2 = 5
function addNum(num1 , num2){
    let total = num1 = num2
    return total
}
const result1 = addNum(val1 , val2)
const result2 = addNum(6 , 8)

// ------Execution phase------
// 1) Global Execution=> this

// 2) Memory creation Phases
  /*val1 = undefined
  val2 = undefined
  addNum = defination
  result1 = undefined
  result2 =- undefined
   */

// 3) Execution Phase 
/*
val1 = 4
val2 = 5
addNum => Create a new variable environment + new Execution thred {delete After its work}
{
(memory Phase)
val1= undefined
val2= undefined
total= undefined

(Execution Context)

num1 = val1 = 4
num2 = val2 = 5
(total = num1 + num2 = 9)=> Return in Global Execution Context
}
result1 = 9
result2 = new veriable environment + new execution thred, delete after complte work
{
(Memory Phase)
num1 = undefined
num2 = undefined
total = undefined

(Execution Phase)
num1 = 6
num2 = 8
total = 14 (return in global Execution)
}
*/
