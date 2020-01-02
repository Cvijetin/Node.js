let userEmail = 'abc1s2s3'
let password = '1234'

// console.log(userEmail.trim());
// console.log(userEmail.toLowerCase());
// console.log(userEmail.toUpperCase());

let userCheck = function(myString) {
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true
    }
    return false
}

//console.log(userCheck(userEmail))

let passCheck = function(pass){
    if ((pass.includes(123)) && (pass.length > 8)) {
        return true
    }
    return false

}