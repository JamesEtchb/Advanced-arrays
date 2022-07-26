let studentNames = ['Juice', 'Johnathan', 'James', 'Pam', 'Carla']

let teachers = [
  {
    name: 'Damian',
    subject: 'arrays',
  },
  {
    name: 'Jonathan',
    subject: 'arrays, javascript',
  },
  {
    name: 'Todd',
    subject: 'everything',
  },
]

//.sort()
// const sortedStudentNames = studentNames.sort()
// console.log(sortedStudentNames)

//.filter()
// const filteredStudentNames = studentNames.filter(function (student) {
//   return student == 'James'
// })
// //just tried writing the function out as an arrow function
// const test = studentNames.filter(studentNames => studentNames == 'Pam')

// console.log(filteredStudentNames)
// console.log(test)

//this will change the original array
//studentNames = studentNames.filter(student => 'James')

//.find()
// const bobby = studentNames.find((student) => student === 'James')
// console.log(bobby)

//.some()
// const someBobby = studentNames.some((student) => student == 'James')
// console.log('Some bobby?', someBobby)

//.every()
// const everyBobby = studentNames.every((student) => student == 'James')
// console.log('Eveeryones bobby?', everyBobby)

//.forEach()
// studentNames.forEach((student) => {
//   console.log(student)
// })

// const justTheNames = teachers.map(teacher => {
//     return teacher.name
// })

// console.log(justTheNames)

//.reduce()
let numbers = [10, 20, 30, 40, 50, 60, 70,80]

let totals = numbers.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue
}, 0)

console.log(totals)

//this is basically writing out .reduce()
// let total = 0
// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i]
// }

//this is how you could use index
total = numbers.reduce((total, currentNumber, index) => {
  if (index < 5) {
    return total + currentNumber
  } else{
    return total
  }
}, 0)
console.log(total)
