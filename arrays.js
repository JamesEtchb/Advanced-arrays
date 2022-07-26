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

const someBobby = studentNames.some(student => student == 'James')
console.log('Some bobby?', someBobby)


const everyBobby = studentNames.every(student => student == 'James')
console.log('Eveeryones bobby?', everyBobby)