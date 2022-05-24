const express = require('express');
const path = require('path');

const app = express();

const absolutePath = path.join('__dirname', 'public');
console.log(absolutePath);

const staticMiddleware = express.static('public');

app.use(staticMiddleware);

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});
