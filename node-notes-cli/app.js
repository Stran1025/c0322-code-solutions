const read = require('./read.js');
const create = require('./add.js');
const remove = require('./delete.js');
const update = require('./update.js');

if (process.argv[2] === 'read') {
  read();
} else if (process.argv[2] === 'create') {
  create(process.argv[3]);
} else if (process.argv[2] === 'delete') {
  remove(process.argv[3]);
} else if (process.argv[2] === 'update') {
  update(process.argv[3], process.argv[4]);
} else {
  console.log('Please enter a valid input');
}
