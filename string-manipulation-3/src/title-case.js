/* exported titleCase */

/*
assign an empty string as output
assign an empty string as a placeholder for the word
lowercase all the letter in the string just in case
assign an empty array as placeholder for the words
  break the input string by ' ' and assign it to the array
if the word is 4 or more character
 capitalize the first letter
 add it to the word string
 then add the rest of the letter in lowercase
 unless the letter is after a -
 capitalize the next letter and then skip the next iteration (++ in the code)
and then for the word with 3 or less letter
  unless it the first letter in the sentence
  make an array for all the word we dont capitalize that is under 3 letters
  check if the current 3 or less letter word is in the list
  or if it is, just add the word as is
  if it is not, capitalize like we would normally
add it to output
  unless the word is at the start of the sentence
  first index of array
  or after the word ending with :
    capitalize the first word regardless actually
return the string
*/

function titleCase(string) {
  var output = '';
  var word = '';
  var lowercase = string.toLowerCase();
  var array = lowercase.split(' ');
  var doNotCapitalize = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      if (array[i] === 'javascript:') {
        word += 'JavaScript: ';
        i++;
        word += array[i][0].toUpperCase() + array[i].substring(1) + ' ';
        continue;
      }
      word = array[i][0].toUpperCase() + array[i].substring(1);
      output += word;
      word = ' ';
      continue;
    } else if (array[i].length <= 3) {
      for (var j = 0; j < doNotCapitalize.length; j++) {
        if (array[i] === doNotCapitalize[j]) {
          word += array[i];
          break;
        } else if (j === doNotCapitalize.length - 1) {
          word += array[i][0].toUpperCase() + array[i].substring(1);
          continue;
        } else if (array[i] === 'api') {
          word += 'API';
          break;
        }
      }
      output += word;
      word = ' ';
    } else if (array[i].length > 3) {
      word += array[i][0].toUpperCase();
      for (j = 1; j < array[i].length; j++) {
        if (array[i][j] === '-') {
          word += array[i][j] + array[i][j + 1].toUpperCase();
          word += array[i].substring(j + 2);
          break;
        } else if (array[i] === 'javascript:') {
          word += 'avaScript: ';
          i++;
          word += array[i][0].toUpperCase() + array[i].substring(1);
          break;
        } else if (array[i][j] === ':') {
          word += ': ';
          i++;
          word += array[i][0].toUpperCase() + array[i].substring(1);
          break;
        } else if (array[i] === 'javascript' && j === array[i].length - 1) {
          word = ' JavaScript';
          break;
        } else {
          word += array[i][j];
          continue;
        }
      }
      output += word;
      word = ' ';
      continue;
    }
  }
  return output;
}
