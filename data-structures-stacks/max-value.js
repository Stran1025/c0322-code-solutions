/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) return -Infinity;
  let highest = -Infinity;
  while (stack.peek() !== undefined) {
    const num = stack.pop();
    if (num > highest) {
      highest = num;
    }
  }
  return highest;
}
