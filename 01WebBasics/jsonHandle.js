const student = { 
    name: 'John',
    lastName: 'Doe ',
    age: 23,
    active: true
}

//Convert this object into a string to be stored in local storage
const studentObjToString = JSON.stringify(student)
console.log(typeof studentObjToString)

//localStorage.setItem('student', studentObjToString)
const toJSONStudent = JSON.parse(studentObjToString)

console.log(typeof toJSONStudent)
console.log(toJSONStudent.age)