// Create web server using Express.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route to handle GET requests
app.get('/', (req, res) => {
  res.send('Welcome to the web server!');
});

// Sample route to handle POST requests
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  if (!comment) {
    return res.status(400).send('Comment is required');
  }
  res.send(`Comment received: ${comment}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});