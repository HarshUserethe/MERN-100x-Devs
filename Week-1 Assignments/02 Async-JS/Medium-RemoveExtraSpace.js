const fs = require('fs');

const removeExtraWhiteSpaces = () => {
  fs.readFile('a.txt', 'utf-8', function(err, data){
    let newData = data.split(/\s+/g).join(" ");
    console.log(newData);
  })
}

removeExtraWhiteSpaces();
