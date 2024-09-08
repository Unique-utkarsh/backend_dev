const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello json ');
  app.get('/twitter', (req, res) => {
    res.send('Hello  twitter ');
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
