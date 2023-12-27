 const isAnagram = function (firstString, secondString){
 var newFirstString = firstString.toLowerCase().split('').sort().join('');
 var newSecondString = secondString.toLowerCase().split('').sort().join('');

  if(newFirstString === newSecondString){
    console.log("String is Anagram");
   }
  else{
    console.log("Not an Anagram");
  }
}
var firstString = "hrhsa";
var secondString = "harsh";

isAnagram(firstString, secondString);
