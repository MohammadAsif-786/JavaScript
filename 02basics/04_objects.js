const asiApp = new Object("Asif");// Singleton
// console.log(asiApp);

const app = {}

app.name = "SAINSIF"
app.id = "asi123"
app.isLoggedIn = false

// console.log(app.id);

const userDtails = {
    address: {
        city: "Sitapur",
        village: "Udnapur Kalan",
    },
    userName: {
        fullName: {
            firstName:"Sainsif",
            lastName: "Ansari",
        }
    }
}

// console.log(userDtails.address);

const class1 = {num2:123,name2:"asif"}
const class2 = {num2:456,name2:"Sainsif"}
const class3 = {num3:789,name3:"asif"}
const class4 = {num4:765,name4:"zaid"}

// const allClass = Object.assign({},class1,class2,class3,class4);
const allClass = {...class1,...class2,...class3,...class4}
// console.log(allClass);
// console.log(class1.num2,class2.num2);

const userData = [
        
    {
        name:"Asif",
        email:"a@gmail.com"
    },
    {
        name:"Asif",
        email:"a@gmail.com"
    },
    {
        name:"Asif",
        email:"a@gmail.com"
    },
]

// console.log(app);
// console.log(userData[0].email);

// console.log(Object.keys(app));
// console.log(Object.values(app));
// console.log(Object.entries(app));

// console.log(app.hasOwnProperty(`isLoggedIn`));

const course =  {
    name:"JavaScript",
    courseInstructor:"HiteshSir",
    price:999
}
// console.log(course.name);
// const {price} = course
const {price: rs} = course
// console.log(price);
console.log(rs);

// API'S

// {
//     name:"asif",
//     email:"a@gmail.com",
// add:"lucknow",           //JSON Formate
//     mobileNum: 8303600000
// }

[
// {
//     name:"asif",
//     email:"a@gmail.com",
// add:"lucknow",           
//     mobileNum: 8303600000
// }
// {
//     name:"asif",
//     email:"a@gmail.com",
// add:"lucknow",           
//     mobileNum: 8303600000
// }
// {
//     name:"asif",
//     email:"a@gmail.com",
// add:"lucknow",           
//     mobileNum: 8303600000
// }
    
]