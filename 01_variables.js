const accountId = 144553
let accountEmail = "ayushdubey682@gmail.com"
var accountPassword = "1234"
accountCity = "Jaunpur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ayushdubey685@gmail.com"
accountPassword = "4324"
accountCity = "Firozabad"

console.log(accountId);

// console.table([]) will create a tabular output
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// initial days me javascript scope (scope ka mtlb jo {} ke andar rahte hai) ke basis pe kaam hi nahi kr pati thi. isliye var ki jagah let ka use krne lge

/**
 * Prefer not to use var
 * because of issue in block scope and functional scope
 */