class User{
    constructor(firstName, lastName, credit){
        this.firstName = firstName
        this.lastName = lastName
        this.credit = credit
    }

    getFullName(){
        let fullName = `${this.firstName} ${this.lastName} is my full name`
        return fullName
    }

    editName(newName){
        const myName = newName.split(' ')
        this.firstName = myName[0]
        this.lastName = myName[1]
    }
}

class Teacher extends User {
    constructor(firstName, lastName, credit, subject){
        super(firstName, lastName, credit)
        this.subject = subject
    }
    getFullName(){
        let fullName = `${this.firstName} ${this.lastName} is my full name and I teach ${this.subject}`
        return fullName
    }
}

const john = new Teacher('John', 'Doe', 34, "Python")
//onsole.log(john)
console.log(john.getFullName())

john.editName('Johnny Anderson')
console.log(john.getFullName())

// const sammy = new User()
// console.log(sammy)