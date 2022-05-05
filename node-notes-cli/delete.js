const data = require('./data.json');
const fs = require('fs');

module.exports = entryId => {
  for (const property in data.notes) {
    if (property === entryId) {
      delete data.notes[property];
      break;
    }
  }
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
};
