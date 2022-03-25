/* exported isVowel */

/*
take input and lowercase it then assigned to compareVariable
check if compareVariable is a, e, i, o, or u
  return true
return false for everything else
*/

function isVowel(char) {
  var comChar = char.toLowerCase();
  if (comChar === 'a' || comChar === 'e' || comChar === 'i' || comChar === 'o' || comChar === 'u') {
    return true;
  } else {
    return false;
  }
}
