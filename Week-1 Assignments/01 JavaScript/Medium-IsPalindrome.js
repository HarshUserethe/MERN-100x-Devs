function isPalindrome(checkString){
  const firstString = checkString.toLowerCase();
  
  const reversedString = firstString.split('').reverse().join('');

  if(firstString === reversedString){
    console.log("Yes, It Is Palindrome");
  }else{
    console.log("Not Palindrome");
  }
}

var checkString = "Radar";
isPalindrome(checkString);
