// let indexing = 0

// while(indexing < 10){
//   console.log(indexing)
//   indexing++
// }

// for(let initialValue=0; initialValue<10; initialValue++){
//   console.log(initialValue)
// }

const binatang = ['kelinci', 'jerapah', 'kodok']

// for(value of binatang){
//   console.log('Ini adalah binatang dengan nama '+ value)
// }

// const data = {
//   name: 'Hellen',
//   skills: [
//     {type: 'Programming'},
//     {type: 'Customer Care'}
//   ]
// }

// for(key in data){
//   if(typeof data[key] === 'string'){
//     console.log(data[key])
//   }else{
//     for(skill of data[key]){
//       console.log(skill.type)
//     }
//   }
// }

// binatang.forEach((value, index)=>{
//   console.log('binatang'+ ' '+ value+ ' dengan index ' + index)
// })

const binatangNew = binatang.map((binatangName, index) => ({name: binatangName}))
console.log(binatang)
console.log(binatangNew)

for(key in binatangNew){
  console.log(binatangNew[key].name)
}