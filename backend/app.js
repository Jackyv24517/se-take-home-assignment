require('dotenv').config();

const express = require('express');
const app = express();
const port = 5000; // You can choose any port number

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});