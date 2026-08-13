const score = 400

console.log(score);

const number = new Number(10000);

// console.log(number);

// console.log(number.toString());
// console.log(number.toString().length);
// console.log(number.toFixed(3));
console.log(number.toPrecision(3));

const number1 = 10000000
console.log(number1.toLocaleString(`en-IN`));


// +++++++++++++++MATHS++++++++++++++

// console.log(Math)

// console.log(Math.round(2.3))
// console.log(Math.floor(2.3))
// console.log(Math.ceil(2.3))
// console.log(Math.min(2,4,6,3, 6,));
// console.log(Math.max(2,4,6,3,8,56,));
// console.log((Math.random())*10+1);

const min = 10
const max = 25

console.log(Math.floor(Math.random() * (max - min + 1)+ min));

