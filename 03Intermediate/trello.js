// FOREACH LOOP

const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']

// let sayHello = function () {
//     console.log(`Greeting message`);
// }

// days.forEach(function (day, index) {
//     console.log(`start with ${index + 1} -- ${day}`);
// })

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

// months.forEach(function (month, index2) {
//     console.log(`start with ${index2 + 1} -- ${month}`);
// })

// LAMBDA EXPRESSIONS

const toDo = ['Buy milk', 'Go to gym', 'Learn things', 'Go to work', 'Have few beers']


toDo.forEach((to, index) => {
    //console.log(`Do those things today ${index +1} ${to}`)
});


// FOR LOOP

for (let index = days.length - 1; index >= 0; index--) {
   // console.log(days[index]);
}

// ASSIGMENT - TODO LIST WITH "FOR" LOOP - start from the end

const myTodos = []

myTodos.push('Do things')
myTodos.push('Swim')
myTodos.push('Run')

for (let index = myTodos.length -1; index >= 0; index--) {
    console.log(myTodos[index])
    
}


