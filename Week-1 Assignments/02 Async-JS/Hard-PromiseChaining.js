 const promise = new Promise(function(resolve, reject){
   setTimeout(()=>{
     console.log("Promise is fulfilled");
     resolve("first promise");
   }, 1000)
 })

promise.then(result => {
  console.log(result);  //first promise consumed

  const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log("Promise is fullfilled");
      resolve("second promise");
    }, 1000)
  })
  promiseTwo.then(result => {
    console.log(result); //second promise consumed

    const promiseThird = new Promise(function(resolve, reject){
      setTimeout(() => {
        console.log("Promise is fullfilled");
        resolve("third promise");
      }, 1000)
    })

    promiseThird.then(result => {
      console.log(result); //third promise consumed
    })
  })
})
