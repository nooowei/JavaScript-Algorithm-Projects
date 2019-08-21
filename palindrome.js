export default function palindrome(str) {

  // remove special characters and spaces, convert to upper case
  // using regex
  var ustr = str.replace(/[^a-zA-Z ]/g, "").replace(/\s/g, '').toUpperCase();

  // split each character of the string and save into an array.
  var farr = ustr.split("");

  // reverse an array with revrse() method
  // var barr = farr.reverse();

  // reverse an array with for loop
  var barr= [];
  for (var i = farr.length-1; i >= 0; i--){
    barr.push(farr[i]);
  }

  // compare the two arrays
  for (var j = 0; j < farr.length; j++){
    if (barr[j] != farr[j]){
      return false;
    }
  }
  return true;
}
