const name = "Ayush"
const repoCount = 50

// console.log(name + repoCount + "value"); older method to write

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // new method and appreciatable

const gameName = new String('ayushKumar-Dubey')

//learn all methods  from mdn to master string

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

//checking position of character
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    ayush   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ayush.com/ayush%30dubey"

console.log(url.replace('%30', '-'));

//Strings sabse jyada powerful hote hai kisi bhi language m

console.log(url.includes('pandit'));

console.log(gameName.split('-'));