const data = require('./data.json');
const fs = require('fs');

module.exports = (entryId, text) => {
  for (const property in data.notes) {
    if (property === entryId) {
      data.notes[property] = text;
    }
  }
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
};
