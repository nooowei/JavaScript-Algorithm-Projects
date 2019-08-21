function palindrome(str) {

  // remove special characters, convert to upper case
  var ustr = str.replace(/[^a-zA-Z ]/g, "").replace(/\s/g, '').toUpperCase();
  //console.log(ustr);

  // split each character of the string and save into an array.
  var farr = ustr.split("");
  //console.log(farr);

  // reverse an array with revrse() method
  // var barr = farr.reverse();
  // console.log(barr);

  // reverse an array with for loop
  var barr= [];
  for (var i = farr.length-1; i >= 0; i--){
    barr.push(farr[i]);
  }
  //console.log(barr);

  // compare the two arrays
  for (var j = 0; j < farr.length; j++){
    if (barr[j] != farr[j]){
      return false;
    }
  }
  return true;
}




console.log(palindrome("e ye"));
console.log(palindrome("asdsad"));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome(""));
