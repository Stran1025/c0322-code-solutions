const data = require('./data.json');
const fs = require('fs');

module.exports = newNote => {
  data.notes[data.nextId] = newNote;
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
};
