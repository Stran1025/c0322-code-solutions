const fs = require('fs');

function copyFile(originalContent, copy) {
  fs.writeFile(copy, originalContent, 'utf-8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}

const copyFileName = process.argv[3];
const originalFileName = process.argv[2];

fs.readFile(originalFileName, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  copyFile(data, copyFileName);
});
