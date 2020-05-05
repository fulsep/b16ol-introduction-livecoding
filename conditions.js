// const isRegister = false

// if(!isRegister){
//   console.log('User has been Registered');
// }else{
//   console.log('Please Register first!');
// }

// const apple = 10

// if(apple >= 10){
//   console.log('Apple is more than 10')
// } else if(apple > 5){
//   console.log('Apple is more than 5')
// } else{
//   console.log('Apple is less than 5')
// }

// const phone = 0

// switch(phone){
//   case 1: {
//     console.log('Your phone is Iphone X')
//     break
//   }
//   case 2: {
//     console.log('Nokia 3310 is the best phone ever!')
//     break
//   }
//   default: {
//     console.log('Your phone is not listed')
//     break
//   }
// }


const price = 1 //true
const isReasonable = true //true
const isCheap = price<=10000?'Is Cheap':'Is Expensive' //ternary
const isCheaper = price && isReasonable && 'Price is OK' //short-sircut logic
const item = false
const isAvail = false
const itemAvail = isAvail || item

const isBuyable = (itemAvail && isCheaper) || 'Nah!'

console.log(isBuyable)