//alert('File is attached')
//console.log(document.documentURI);
//console.log(document.title);

// document.title = 'I got changed'

// console.log(document.getElementById('idone'))
// console.log(document.getElementsByClassName('one'))

// const myElement = document.querySelectorAll('p')
// console.log(myElement)

// const myPElements = document.querySelector('p')
// myPElements.textContent = 'I am being changed using JS'

// const allPelements = document.querySelectorAll('p')
// allPelements.forEach(p => p.textContent = 'i am chengded again');

// ADDED ELEMENT VIA JS
const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'
document.querySelector('body').appendChild(myNewPara)

//btn click
// document.querySelector('button').addEventListener('click', (event) => {
//     event.target.textContent = 'I was clicked'
// })

// document.querySelector('#myForm').addEventListener('input', (event) => {
//     console.log(event.target.value)
// })

