/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() !== 'undefined') {
    let first = queue.dequeue();
    if (typeof queue.peek() === 'undefined') return first;
    let second = queue.peek();
    while (second < first) {
      queue.enqueue(first);
      first = queue.dequeue();
      second = queue.peek();
    }
    return first;
  }
}
