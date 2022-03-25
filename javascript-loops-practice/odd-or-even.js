/* exported oddOrEven */
function oddOrEven(numbers) {
  var returnArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      returnArray.push('even');
    } else {
      returnArray.push('odd');
    }
  }
  return returnArray;
}
