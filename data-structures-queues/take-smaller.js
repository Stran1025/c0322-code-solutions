/* exported takeSmaller */

function takeSmaller(queue) {
  if (typeof queue.peek() === 'undefined') return;
  const output = queue.dequeue();
  if (typeof queue.peek() === 'undefined') return output;
  if (queue.peek() > output) {
    queue.enqueue(queue.dequeue());
    return output;
  }
  queue.enqueue(output);
  return queue.dequeue();
}
