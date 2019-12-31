let getMyGrade = function (currentMarks, totalMarks) {
    let myPercent = (currentMarks/totalMarks) * 100

    let myGrade = ''

    if (myPercent >=90) {
        myGrade = 'A'
    }else if  (myPercent >=80) {
        myGrade = 'B'
    }else if  (myPercent >=60) {
        myGrade = 'C'
    }else if  (myPercent >=50) {
        myGrade = 'D'
    }else {
        myGrade = 'F'
    }

    return `Your grade is ${myGrade} and my percentage is ${myPercent}`
}

let yourResult = getMyGrade(100, 100)
console.log(yourResult)