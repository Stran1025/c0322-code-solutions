const express = require('express');
const app = express();
const data = require('./data.json');

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const property in data.notes) {
    notesArray.push(data.notes[property]);
  }
  res.send(notesArray);

});

app.listen(3000, () => {
  process.stdout.write('Server is listening on port 3000!');
});
