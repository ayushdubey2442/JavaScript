// # 1.Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigIntNumber = 453985720710n

// 2.Reference (Non primitive)

//Array, Object, functions

const heros = ["shaktiman", "naagraj", "Balhanuman"]
let myobj = {
    name: "Ayush",
    age: 23,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigIntNumber)
console.log(typeof outsideTemp)
console.log(typeof myFunction)



// ********************************************** Stack and Heap Memory in JavaScript *********************************************

// Stack (used in primitive type), Heap(used on Non-Primitive)

let myYoutubeName = "Devayush.com"
let anotherName = myYoutubeName
anotherName = "ayushBhaiya"

console.log(`The result of stack memory is ${anotherName}`);
console.log(myYoutubeName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "ayushdubey683@google.com"

console.log(userOne.email);
console.log(userTwo.email);

