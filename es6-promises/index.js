const takeAChance = require('./take-a-chance');

const test = takeAChance('Sang');
test.then(success => {
  console.log(success);
}, err => {
  console.log(err.message);
});
