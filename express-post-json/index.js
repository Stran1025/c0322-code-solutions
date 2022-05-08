const express = require('express');

const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const output = [];
  for (const property in grades) {
    output.push(grades[property]);
  }
  res.json(output);
});

app.use(express.json());

app.use((req, res) => {
  if (req.method !== 'POST' || req.url !== '/api/grades') {
    res.status(400).send('Bad Request');
    return;
  }
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.send(grades[nextId]);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is running');
});
