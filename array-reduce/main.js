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

console.log('sum', numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0));
console.log('product', numbers.reduce((previousValue, currentValue) => previousValue * currentValue, 1));
console.log('balance', account.reduce((previousValue, currentValue) => {
  if (currentValue.type === 'deposit') {
    return previousValue + currentValue.amount;
  }
  return previousValue - currentValue.amount;
}, 0));
console.log('composite', traits.reduce((previousValue, currentValue) => {
  return Object.assign(previousValue, currentValue);
}, {}));
