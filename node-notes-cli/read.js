const data = require('./data.json');

module.exports = () => {
  for (const property in data.notes) {
    console.log(property + ': ' + data.notes[property]);
  }
};
