/* exported filterOutStrings */
function filterOutStrings(values) {
  var returnArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      returnArray.push(values[i]);
    }
  }
  return returnArray;
}
