//01 Implemented Counter Using setTimeout();

 const counter = (number) => {
   console.log(number); //updated value after every setTimeout();
   
   if(number < 10){  
     number++;

     setTimeout(function(){
       counter(number);
     }, 1000);
   }
 }

counter(1);



//02 Implemented Counter Using setInterval();

var number = 0;

const counter2 = () => {
setInterval(function(){
  number = number + 1;
  console.log(number);
}, 1000)
}

