// Object Destructuring
let obj = {
    firstName: "Umar",
    lastName: "Ahmad",
    age: 25,
    caste: "ABC",
    rollNo: 525
}

let { firstName, age, ...args } = obj

console.log(firstName, age, args)


// Array Destructuring
let colors = ["red", 'green', 'blue']
let [red, green, blue] = colors

// console.log(colors[0], colors[1], blue)



// Spread Operator Examples
let newObj = {...obj}
// console.log(newObj)

const vehicles = ['mustang', 'f-150', 'honda-70', 'honda-100'];
const myarr = vehicles.
console.log(myarr)



// vehicles.push("habiba");
// console.log(vehicles)
// const newVehicles = [[...vehicles], "Mudassar"];

// const mud = newVehicles.filter((myname)=>{
//     return (myname !== "Mudassar" )
// })
// console.log(mud)



// console.log(newObj);
// console.log(newVehicles);
