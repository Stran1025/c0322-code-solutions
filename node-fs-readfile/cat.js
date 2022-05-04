const fs = require('fs');

let count = 2;
read(count);

function read(num) {
  fs.readFile(process.argv[num], 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit();
    }
    console.log(data);
    count++;
    if (count < process.argv.length) {
      read(count);
    }
  });
}
