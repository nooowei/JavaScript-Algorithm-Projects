function cCipher(str, num){
  // declare a new string
  var newStr = "";

  // iterate through the string with for loop
  for (var i = 0; i < str.length; i++){
    var x = str[i];

    // check if character is a letter
    if (x.match(/[a-z]/i)){
      // get the unicode for the character
      var uni = str.charCodeAt(i);

      // convert lowercase letters by shifting unicode
      if ((uni >= 97) && (uni <= 122)){
        x = String.fromCharCode(((uni - 97 + num)%26)+97);
      }

      //convert uppercase letters by shifting unicode
      else if ((uni >= 65) && (uni <= 90)){
        x = String.fromCharCode(((uni - 65 + num)%26)+65);
      }
    }
    newStr += x;
  }
  return newStr;
}


console.log(cCipher("asd", 13));      //'nfq'
console.log(cCipher("abc", 7));       //'hij'
console.log(cCipher("HELLkjhO", 10)); //'ROVVutrY'
console.log(cCipher("123", 22));      //'123'
