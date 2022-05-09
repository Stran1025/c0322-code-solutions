const express = require('express');

const grade = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const app = express();

app.use((req, res, next) => {
  if (req.path !== '/api/grades') {
    next();
    return;
  }
  const output = [];
  for (const property in grade) {
    output.push(grade[property]);
  }
  res.json(output);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is running');
});
