/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const item = new LinkedList(value);
  item.next = list;
  return item;
}
