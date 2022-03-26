/* exported capitalizeWord */

/*
set an empty string as output
capitalized the first letter
add the capitalized letter to the output
starting at the second letter and loop through the rest of the word to
  lowercase all the letters
add each of the lowercase letters to the output
return output
*/

function capitalizeWord(word) {
  var js = word.toLowerCase();
  if (js === 'javascript') {
    return 'JavaScript';
  }
  var output = '';
  output += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    output += word[i].toLowerCase();
  }
  return output;
}
