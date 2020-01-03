//alert('File is attached')
// function myValidation() {
//     let myValue = document.getElementById('myForm').value;
//     let changeP = document.querySelector('#idone')

//     if (isNaN(myValue) || myValue < 1 || myValue > 20) {
//         changeP.textContent = 'Not a valid input'
//         //console.log('Not a valid input')
//     } else {
//         changeP.textContent = 'This input is ok'
//         //console.log('this input is ok')
//     }
// }

//form validation - remove from URL, prevent default and reset form after submission
// document.querySelector('.myform').addEventListener('submit', (event) =>{
//     event.preventDefault()
//     console.log(event.target.username.value)
//     console.log(event.target.realname.value)
//     event.target.username.value = '';
//     event.target.realname.value = '';
// })

document.querySelector('.loginForm').addEventListener('submit', (event) =>{
    event.preventDefault()

    console.log(event.target.username.value)
    console.log(event.target.realname.value)
    if (document.querySelector('#password').value != document.querySelector('#repeatPassword').value ) {
        const myNewPara = document.createElement('p')
        myNewPara.textContent = 'Wrong password'
        document.querySelector('body').appendChild(myNewPara)
        event.target.password.value = '';
        event.target.repeatPassword.value = '';
    } else {
        event.target.username.value = '';
        event.target.realname.value = '';
        event.target.password.value = '';
        event.target.repeatPassword.value = '';
    }

  
})


