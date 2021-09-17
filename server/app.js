const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(port,() => {
  console.log(`This app is now listening at http://localhost:${port}`);
});