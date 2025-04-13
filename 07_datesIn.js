//Dates

let myDate = new Date()
console.log(myDate);

let myDates = new Date()
console.log(myDates.toString());

//.ISOString()
console.log(myDates.toISOString());

//.toJSON
console.log(myDates.toJSON());

//.toLocaleDateString
console.log(myDates.toLocaleString());

//.toLocaleString
console.log(myDates.toLocaleString());

//.getTimezoneoffset
console.log(myDates.getTimezoneOffset());

console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2025, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleDateString());

//dd-mm-yy
let myCreatedDate2 = new Date("2025-01-24")
console.log(myCreatedDate1.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate2.getTime());

//to convert it in seconds
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// ctrl + space btn => sari properties show hone lagti hai
newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'gmt'
})