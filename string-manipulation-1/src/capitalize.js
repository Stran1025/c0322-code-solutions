/* exported capitalize */

/* capitalized the first letter of the string and asign to variable returnString
from the 2nd letter to the end of the string always lowercase letters
  second letter lowered case added to returnString
  repeat until the last letter
return returnString */

function capitalize(word) {
  var returnString = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    returnString += word[i].toLowerCase();
  }
  return returnString;
}
