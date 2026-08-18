/*function globalPolution () {
    console.log(`IIFE`);
}*/

//globalPolution()
(function securePolution(){

    //Name IIFE

    console.log(`Secure the gobal polutions`)
})();

( () => {
    console.log(`Asif ansari`);
} )();



( (name)=>{console.log(`My Name is ${name}`)} )("Asif")