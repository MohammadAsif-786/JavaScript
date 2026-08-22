// for of

// ["", " ", " "]
// [{}],{},{}

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const heros = "My hero is Iron-Man"

for (const hero of heros) {
    // console.log(`marval ${hero}`);
    
}

// -------Maps------

const map = new Map()
map.set("in","india");
map.set("usa","united state of america");

// console.log(map);

for (const [key , value] of map) {
    // console.log(key,`=`, value)
}



// const myObject = {
//     'movie1':'SpiderMan 1',
//     'movie2':'SpiderMan 2'
//}
// for (const [key , value] of myObject) {
//     console.log(key,`=`, value)
// }