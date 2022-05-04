const fs = require('fs');

const inputData = process.argv[2];

fs.writeFile('note.txt', inputData + '\n', 'utf-8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
