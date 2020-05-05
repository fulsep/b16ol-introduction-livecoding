// function sum(a){
//   return a.param1+a.param2
// }

// const data = {
//   name: 'John',
//   addLastName: function(lastName){
//     return this.name + ' ' + lastName
//   }
// }

// data.name = 'Hellen'
// console.log(data.addLastName('Mayer'))

const sub = (param1, param2) => (param1 - param2)

const data = {
  name : 'Marlyn',
  addLastName: (lastName) => data.name + ' ' + lastName
}

console.log(data.addLastName('Monroe'))