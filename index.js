const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('test received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Well hello #3 ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
