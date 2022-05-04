const plus = require('./add.js');
const minus = require('./subtract.js');
const time = require('./multiply');
const over = require('./divide');

if (process.argv[process.argv.length - 2] === 'plus') {
  console.log(`result: ${plus(parseInt(process.argv[process.argv.length - 3]), parseInt(process.argv[process.argv.length - 1]))}`);
} else if (process.argv[process.argv.length - 2] === 'minus') {
  console.log(`result: ${minus(parseInt(process.argv[process.argv.length - 3]), parseInt(process.argv[process.argv.length - 1]))}`);
} else if (process.argv[process.argv.length - 2] === 'time') {
  console.log(`result: ${time(parseInt(process.argv[process.argv.length - 3]), parseInt(process.argv[process.argv.length - 1]))}`);
} else if (process.argv[process.argv.length - 2] === 'over') {
  console.log(`result: ${over(parseInt(process.argv[process.argv.length - 3]), parseInt(process.argv[process.argv.length - 1]))}`);
} else {
  console.log('Invalid inputs');
}
