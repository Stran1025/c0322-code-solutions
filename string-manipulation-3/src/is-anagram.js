/* exported isAnagram */

/*
lowercase all the character in both  string
split the string into arrays with each character as an index ('')
for each character in the input string1
  push it into an array
  repeat this for string2
for each character in string1 array from the last index
  if any chracter in string2 is marching with string1
  remove that character in both of the array
  use pop for the first array
  and splice for second array
  repeat until no more character is left in string1
if either string1 or string2 array have any character left
return false
if not return true
return the value of the comparasion
*/

function isAnagram(string1, string2) {
  var string1Lowercase = string1.toLowerCase();
  var array1 = string1Lowercase.split('');
  var string2Lowercase = string2.toLowerCase();
  var array2 = string2Lowercase.split('');
  for (var i = array1.length - 1; i >= 0; i--) {
    if (array1[i] === ' ') {
      array1.pop();
      continue;
    }
    for (var j = 0; j < array2.length; j++) {
      if (array2[j] === ' ') {
        array2.splice(j, 1);
      } else if (array1[i] === array2[j]) {
        array1.pop();
        array2.splice(j, 1);
      }
    }
  }
  if (array1.length > 0 || array2.length > 0) {
    return false;
  } else {
    return true;
  }
}
