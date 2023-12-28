const fs = require('fs');

fs.readFile('a.txt', 'utf-8', function(err, data){
  if(err){
    console.log(err);
  }

  //calling expensiveOperation
  //remove this method in order to read file data without intruption
  expensiveOperation();

  //return file data
  console.log("File Data");
  console.log(data);
  
})


const expensiveOperation = () => {
  let sum = 0;

  for(i = 0; i<=10000000; i++){
    sum = sum + 1;
    console.log(sum);
  }
  
}
