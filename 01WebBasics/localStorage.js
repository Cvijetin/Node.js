localStorage.setItem('hero', 'thor')
localStorage.setItem('todo', 'Buy Ic tea')
var myHero = localStorage.getItem('hero')
console.log(myHero)

console.log(localStorage.getItem('todo'))

localStorage.setItem('todo', 'record yt videos')
console.log(localStorage.getItem('todo'))


localStorage.removeItem('hero')
myHero = localStorage.getItem('hero')

console.log(myHero)