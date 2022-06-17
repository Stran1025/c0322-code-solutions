/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) return;
  const last = stack.pop();
  const second = stack.peek();
  stack.push(last);
  return second;
}
