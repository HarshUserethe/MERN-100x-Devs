const promise = new Promise((resolve, reject) => {
  fetch('https://official-joke-api.appspot.com/random_joke')
  .then(response => {
      return response.json();
  })
  .then(data => {
    resolve(data);
  })
  .catch(error => {
    reject("Error", error);
  })
})

promise.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})
