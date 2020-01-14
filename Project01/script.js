//Create text
var h = document.createElement('h1')
var myValue = document.createTextNode('Hello world!')

// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)
let val = 5;

// while (val > 0) {
//  console.log(val)
//  val--   
// }

var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

function addItem() {
    var input = document.getElementById('input')
    var item = input.value;
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if (item === '') {
        p = document.createElement('p')
        p.textContent = 'Enter your todo'
        document.querySelector('ul').appendChild(p)
        //return false
        setTimeout(() => {
            ul.removeChild(p)
        }, 1000);
    } else {
        //create li
        li = document.createElement('li')
        //create input type checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')
        //create label
        var label = document.createElement('label')
        label.setAttribute('for', 'item')//optional
        // add this element on web page
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        //li.className= 'visual'
        setTimeout(() => {
            li.className = 'visual'
        }, 10);

        input.value = ''
    }

}

function removeItem() {
    li = ul.children
    if (li.length === 0) {
        p = document.createElement('p')
        p.textContent = 'Enter your todo'
        document.querySelector('ul').appendChild(p)
        setTimeout(() => {
            ul.removeChild(p)
        }, 1000);
    } else {
        for (let index = 0; index < li.length; index++) {
            while (li[index] && li[index].children[0].checked) {
                ul.removeChild(li[index])
            }
        }
    }

}