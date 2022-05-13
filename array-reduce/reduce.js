function reduce(array, reducer, initialValue) {
  if (initialValue === undefined) {
    initialValue = array[0];
  }
  let output = initialValue;
  for (let i = 0; i < array.length; i++) {
    output = reducer(output, array[i]);
  }
  return output;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

console.log('sum', reduce(numbers, (previousValue, currentValue) => previousValue + currentValue, 0));
console.log('product', reduce(numbers, (previousValue, currentValue) => previousValue * currentValue, 1));
console.log('balance', reduce(account, (previousValue, currentValue) => {
  if (currentValue.type === 'deposit') {
    return previousValue + currentValue.amount;
  }
  return previousValue - currentValue.amount;
}, 0));
console.log('composite', reduce(traits, (previousValue, currentValue) => {
  return Object.assign(previousValue, currentValue);
}, {}));
