let sayHello = function (name) {
    console.log(`Greeting message for ${name}`);
    console.log(`Hey ${name}`);
}

//sayHello('John');

let fullNameMaker = function(firstname, lastname) {
    console.log('Welcome ')
    console.log(`Happy to have you ${firstname} ${lastname}`)
}

//fullNameMaker('John', 'Doe')

let myAdder = function(num1, num2){
    let added = num1 + num2
    return added
}

let result = myAdder(3,4)
//console.log(result)


let myMultiplier = function(num1, num2){
    return num1 * num2
     
}

let multipliedResult = myMultiplier(5,4)
//console.log(multipliedResult)

let guestUser = function(name = 'unName', courseCount = 0){
    return `Hello ${name} and your course count is ${courseCount}`
}

console.log(guestUser('Cvijetin'))