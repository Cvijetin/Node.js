var john = {
    name: 'I am John',
    age: 24,
    isActive: true
}

var marry =  {
    name:'I am Marry',
    age: 24,
    isActive: true
}

var sam =  {
    name:'I am Sam',
    age: 29,
    isActive: false
}
let users = new Map()

users.set('john', john)
users.set('mary', marry)
users.set('sam', sam)

// console.log(users.size)

// console.log(users.get('sam'))

// console.log(users.keys());

// console.log(users.values());

// for (const key of users.keys()) {
//     console.log(key)
// }

// for (const value of users.values()) {
//         console.log(value.name)
//      }

// for (const [key, value] of users.entries()) {
//     console.log(`The key is: ${key} and the value is: ${value.name}`)
// }     

// users.forEach((value, key) =>  console.log(`The key is: ${key} and the value is: ${value.name}`))

var arrOfArr = [['one', '1'], ['two', '2'], ['three', '3']]

var newMap = new Map(arrOfArr)

newMap.forEach((value, key) => console.log(`The key is: ${key} and the value is: ${value}`))

console.log(newMap)