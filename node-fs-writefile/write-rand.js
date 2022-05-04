const fs = require('fs');

fs.writeFile('random.txt', Math.random().toString() + '\n', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
