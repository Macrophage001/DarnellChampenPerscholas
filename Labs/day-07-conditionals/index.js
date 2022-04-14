const max = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const studentScore = (studentScore) => {
    if ( studentScore >= 90) {
        console.log("Student got a score of A")
    } 
    if ( studentScore >= 80 ) {
        console.log("Student got a score of B")
    }
    if ( studentScore >= 70 ) {
        console.log("Student got a score of C")
    } 
    if ( studentScore >= 55 ) {
        console.log("Student got a score of D")
    } 
    if ( studentScore < 55 ) {
        console.log("Student got a score of F")
    }
}