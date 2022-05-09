const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const property in data.notes) {
    notesArray.push(data.notes[property]);
  }
  res.send(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  if (isNaN(parseInt(req.params.id))) {
    const error = { error: `the id need to be a number, ${req.params.id} is not a number` };
    res.status(400).json(error);
    return;
  } else if (!data.notes[req.params.id]) {
    const error = { error: `cannot find note with id of ${req.params.id}` };
    res.status(404).json(error);
    return;
  }
  res.json(data.notes[req.params.id]);
});

app.delete('/api/notes/:id', (req, res) => {
  if (isNaN(parseInt(req.params.id))) {
    const error = { error: `the id need to be a number, ${req.params.id} is not a number` };
    res.status(400).json(error);
    return;
  } else if (!data.notes[req.params.id]) {
    const error = { error: `cannot find note with id of ${req.params.id}` };
    res.status(404).json(error);
    return;
  }
  delete data.notes[req.params.id];
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      const error = { error: 'An unexpected error occurred' };
      res.status(500).json(error);
    }
    res.status(204).send();
  });
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    const error = { error: 'content is a require field' };
    res.status(400).json(error);
    return;
  }
  req.body.id = data.nextId;
  data.notes[data.nextId] = req.body;
  data.nextId++;
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      const error = { error: 'An unexpected error occurred' };
      res.status(500).json(error);
    }
    res.status(201).json(data.notes[data.nextId]);
  });
});

app.put('/api/notes/:id', (req, res) => {
  if (isNaN(parseInt(req.params.id))) {
    const error = { error: `the id need to be a number, ${req.params.id} is not a number` };
    res.status(400).json(error);
    return;
  } else if (!data.notes[req.params.id]) {
    const error = { error: `cannot find note with id of ${req.params.id}` };
    res.status(404).json(error);
    return;
  } else if (!req.body.content) {
    const error = { error: 'content is a require field' };
    res.status(400).json(error);
    return;
  }
  req.body.id = parseInt(req.params.id);
  data.notes[req.params.id] = req.body;
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      const error = { error: 'An unexpected error occurred' };
      res.status(500).json(error);
    }
    res.status(200).json(data.notes[req.params.id]);
  });
});

app.listen(3000, () => {
  process.stdout.write('Server is listening on port 3000! \n');
});
