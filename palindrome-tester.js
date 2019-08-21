import {palindrome} from "palindrome.js";

//base case - a palindrome
if (palindrome("eye")){
  return "Correct";
}
else{
  return "Incorrect";
}

//base case - not a palindrome
if (palindrome("eyes")){
  return "Incorrect";
}
else{
  return "Correct";
}

//base case - empty string
if (palindrome("")){
  return "Correct";
}
else{
  return "Incorrect"
}

//Base case - special characters
if (palindrome("nope.epon")){
  return "Correct";
}
else{
  return "Incorrect"
}

//base case - space
if (palindrome("spoon noops")){
  return "Correct";
}
else{
  return "Incorrect"
}
