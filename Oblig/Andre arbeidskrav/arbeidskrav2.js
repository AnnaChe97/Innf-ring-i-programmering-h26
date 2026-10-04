//Endret navn på filen for å få riktig fil-import til HTML.

//Jobbet sammen med Marius og Marie for å fullføre oppgaven. Har ikke brukt noe KI kun medstudenter.

// Gjort om grade fra streng til tall-verdi
const students = [
    { name: "Alice", age: 20, grade: 6, workexperience: 2 },
    { name: "Bob", age: 22, grade: 5, workexperience: 1 },
    { name: "Charlie", age: 19, grade: 4, workexperience: 0 },
    { name: "David", age: 21, grade: 5, workexperience: 3 },
    { name: "Eve", age: 23, grade: 6, workexperience: 4 },
    { name: "Frank", age: 20, grade: 3, workexperience: 1 },
    { name: "Grace", age: 22, grade: 2, workexperience: 2 },
    { name: "Hannah", age: 39, grade: 1, workexperience: 5 },
    { name: "Ian", age: 21, grade: 4, workexperience: 1 },
    { name: "Jack", age: 23, grade: 5, workexperience: 3 },
    { name: "Kathy", age: 20, grade: 6, workexperience: 4 },
    { name: "Liam", age: 22, grade: 3, workexperience: 2 },
    { name: "Mia", age: 19, grade: 2, workexperience: 1 },
    { name: "Noah", age: 21, grade: 1, workexperience: 0 },
    { name: "Olivia", age: 23, grade: 4, workexperience: 3 },
    { name: "Paul", age: 40, grade: 5, workexperience: 10 },
    { name: "Quinn", age: 22, grade: 6, workexperience: 0 },
    { name: "Ryan", age: 19, grade: 3, workexperience: 0 },
    { name: "Sophia", age: 21, grade: 2, workexperience: 0 },
    { name: "Tyler", age: 23, grade: 1, workexperience: 0 }
]   

const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
]

function countStudents(){
    const length = students.length
    return length
}

countStudents(length)

document.getElementById("studentCount").innerHTML = students.length

/*Bruker map for å kunne beregne gjennomsnittskarakter. 
Map går gjennom hvert element i lista for å summere sammen grades for å lage en ny liste*/

function gradeAverage(){
    let totalgrades = 0
    students.map(student => totalgrades += student.grade)
    
    let average = totalgrades / countStudents()
    
    average = Math.ceil(average)
    
    return average

}
gradeAverage()

let letterGrade = grades.filter(grade => grade.score === gradeAverage() )

console.log(letterGrade[0].letter)

document.getElementById("averageGrade").innerHTML = letterGrade[0].letter

function gradePrint(){
    grades.map(grade => {
    document.getElementById(`grade${grade.letter}`).innerHTML = students.filter(student => student.grade === grade.score).length
    })

}
gradePrint()


/*Bruker map for å finne ut gjennomsnitts alder */ 
function studentAgeAverage(){
    let totalAge = 0

    students.map(student => totalAge += student.age)

    let ageAverage = totalAge / countStudents()

    return ageAverage.toFixed(2)

}

document.getElementById("averageAge").innerHTML = studentAgeAverage()

let straightOutOfHS = students.filter(student => student.age === 19).length

//Skrev ut for å teste om variablen fungerte
console.log(straightOutOfHS)

document.getElementById("highSchool").innerHTML = straightOutOfHS

let workLife = students.filter(student => student.workexperience >= 1).length

document.getElementById("workExperience").innerHTML = workLife