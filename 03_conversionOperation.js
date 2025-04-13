let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let tmp = null
console.log(typeof tmp)
console.log(tmp)

// "33" => 33
// "33abc" => NaN
// true =>1; false=>0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.table(booleanIsLoggedIn);
//1 => true

let putAnEmpty = ""

let seePutAnEmpty = Boolean(putAnEmpty)
console.log(`Put an empty is ${seePutAnEmpty}`);
//"" => false

let letUsPutZero = 0

let Result = Boolean(letUsPutZero)
console.log(`Result of letUsPutZero ${Result}`);
//0 => false

//"Ayush" =>true  for boolean

let someNumber = 33

let stringNumber = String(someNumber)
console.log(`The result of string number is ${stringNumber}`);
console.log(typeof stringNumber);


// **************************** Operations ******************************

let value = 3
let negValue = -value
console.log(`The result of negValue is ${negValue}`);

// console.log(2+2);
// console.log(3*3);
// console.log(3/3);
// console.log(3**3);
// console.log(3%3);

let str1 = "hello"
let str2 = "Ayush"
let str3 = str1 + str2
console.log("str3");

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 3 + "2");

console.log(`The result of true is ${true}`);


console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 3


//Read about prifix operator and postfix operator
let gameCounter = 100
gameCounter++;
console.log(`The result of gameCounter is ${gameCounter}`);



