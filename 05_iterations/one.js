// For

// for (let i  = 0; i < 11; i++) {
//     const element = i;
//     if(element == 8){
//         console.log("8 is lucky number")
//     }
//     console.log(element);
// }

// // console.log(element);
// for (let i = 1; i < 5; i++) {
//     // console.log(i);
//     for (let j = 1; j < 5; j++) {
//         // console.log(`iner loop runs ${j} and outer loop run ${i} `);
//         console.log(`${i}*${j} = `+ i*j  );
//     }
        
    
// // }
// let myArray = ["Asif", "Aman", "zaid","Mumtaj"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// Breack and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 8){
//         console.log(`Best Value of I = ${index}`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }  
for (let index = 1; index <= 20; index++) {
    if(index == 8){
        console.log(`Best Value of I = ${index}`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}  