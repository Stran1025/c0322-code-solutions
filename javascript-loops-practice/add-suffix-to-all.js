/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var returnArray = [];
  for (var i = 0; i < words.length; i++) {
    returnArray.push(words[i] + suffix);
  }
  return returnArray;
}
