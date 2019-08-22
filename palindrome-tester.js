import {palindrome} from "palindrome.js";

//base case - a palindrome
console.log("Test 1, should return Correct")
if (palindrome("eye")){
  return "Correct";
}
else{
  return "Incorrect";
}

//base case - not a palindrome
console.log("Test 2, should return Incorrect")
if (palindrome("eyes")){
  return "Incorrect";
}
else{
  return "Correct";
}

//base case - empty string
console.log("Test 3, should return Correct")
if (palindrome("")){
  return "Correct";
}
else{
  return "Incorrect"
}

//Base case - special characters
console.log("Test 4, should return Correct")
if (palindrome("nope.epon")){
  return "Correct";
}
else{
  return "Incorrect"
}

//base case - space
console.log("Test 5, should return Correct")
if (palindrome("spoon noops")){
  return "Correct";
}
else{
  return "Incorrect"
}
