// const data = new Promise((resolve, reject)=> {
//   setTimeout(()=>{
//     resolve('Hello World after 2000ms')
//   }, 2000)
//   setTimeout(()=>{
//     reject(true)
//   }, 3000)
// })
// data
// .then(hello=>{
//   console.log(hello)
//   console.log('I\'m appear after 2000ms')
// })
// .catch(()=>{
//   console.log('Data is rejected')
// })

const data = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(10)
  },2000)
  setTimeout(()=>{
    reject(new Error('Data Rejected'))
  },1000)
})

async function sum(a,b){
  let additionalData = 0
  try{
    additionalData = await data
  }catch(e){
    additionalData = 5
  }
  return a+b+additionalData
}

sum(10,11).then(result=>console.log(result))




//JavaScript
// "Data" -> github.com (data user) -> Promise -> Pemrosesan -> Output data
//PHP
// "Data" -> github.com (otomatis ditunggu sampai ready) -> Proses -> Output
// 1. Ambil datanya dari internet
// 2. Setelah selesai maka data akan ditampil