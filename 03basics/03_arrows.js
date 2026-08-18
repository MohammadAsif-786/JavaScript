/**const user = {
    userName:"Asif",
    price: 999,
    welcomeMassage: function(){
        console.log(`${this.userName}, Welcome to website`);
        console.log(this);
    }
}

user.userName= "SAS"
user.welcomeMassage()

console.log(this);
function one(){
    let name = "AS"
    console.log(this.name);
}
one()**/
/**
const one = 
    function (){
        let userName = "ASIF"
        console.log(this.userName);
    }

one()**/

const one = () => {
        let userName = "ASIF"
        console.log(this.userName);
    }
//one()
/*
const addTwo = (num1 , num2) => {
    return num1 + num2 
}*/

// const addTwo = (num1, num2) => num1 * num2 
//const multThree = (num1, num2, num3) => (num1*num2*num3)

const user = () => ({userName:"Asif"})
console.log(user());