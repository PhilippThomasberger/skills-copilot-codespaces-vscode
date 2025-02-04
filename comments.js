// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Listen to port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Output: Example app listening at http://localhost:3000