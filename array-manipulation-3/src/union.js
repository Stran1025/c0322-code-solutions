/* exported union */

/*
assign an empty array as output
  for each item in the first array
    add them to the output array
  for each item in the second array
    compare them to each item in the output array
      if they matches do nothing
      if they dont match
        add the item to the output
return output
*/

function union(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    output.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    for (var k = 0; k < output.length; k++) {
      if (second[j] === output[k]) {
        break;
      } else if (k === output.length - 1) {
        output.push(second[j]);
      }
    }
  }
  return output;
}
