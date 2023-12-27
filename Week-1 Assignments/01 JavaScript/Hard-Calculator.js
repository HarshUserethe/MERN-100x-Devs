function sum(a, b){console.log(a + b);}
function sub(a, b){console.log(a - b);}
function mul(a, b){console.log(a * b);}
function div(a, b){console.log(a / b);}


const operator = prompt("Enter operator (either +, -, * or /): ");
const number1 = parseFloat(prompt("Eenter first number: "));
const number2 = parseFloat(prompt("Eenter second number: "));

if(operator == '+'){
  sum(number1, number2);
}
else if(operator == '-'){
  sub(number1, number2);
}
else if(operator == '*'){
  mul(number1, number2);
}
else if(operator == '/'){
  div(number1, number2);
}
else{
  console.log("Invalid operator");
}

