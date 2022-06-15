/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let count = 0;
  while (count < index) {
    queue.enqueue(queue.dequeue());
    count++;
  }
  return queue.dequeue();
}
