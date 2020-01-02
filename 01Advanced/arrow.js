// const sayHello = function (name) {
//     return 'Hey there ' + name 
// }
// console.log(sayHello('Cvele'))

// const sayHello =  (name) => `Hey there ${name}`

// console.log(sayHello('Cvele'))

const todos = [{
    title: 'Buy bread',
    isDone: true
},{
    title: 'Go to gym',
    isDone: true
},{
    title: 'Record yt videos',
    isDone: true
},{
    title: 'Record ',
    isDone: true
},{
    title: 'Watch videos',
    isDone: true
},{
    title: 'Sleep',
    isDone: true
}]
// ARROW FUNCTION
const thingsDone = todos.filter((todo) => todo.isDone === true)

// REGULAR FUNCTION
const thingsDone2 = todos.filter(function (todo) {
    return todo.isDone === true
})

//console.log(thingsDone2)
//console.log(thingsDone)

const thingsNotDone = todos.filter((todo) => todo.isDone === false)

notDone = []
todos.forEach(todo => {
    if (todo.isDone === false) {
       notDone.push(todo.title)
    }
});
//console.log(notDone)