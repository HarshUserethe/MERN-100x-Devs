const fs = require('fs');

const writeFile = () => {
  const data = "I love coding..";
  fs.writeFile('a.txt', data, function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log("Data has been updated");
    }
  })
}

  writeFile(); 
