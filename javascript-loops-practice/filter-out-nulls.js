/* exported filterOutNulls */
function filterOutNulls(values) {
  var returnArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      returnArray.push(values[i]);
    }
  }
  return returnArray;
}
