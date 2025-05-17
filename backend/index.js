// index.js
const express = require('express');
const server = express();

server.get('/', (request, response) => {
  response.send('Hello');
});

server.listen(3000, () => console.log('Server running on port 3000'));