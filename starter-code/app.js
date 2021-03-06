const express = require('express');

// Express server handling requests and responses
const app = express();

app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/galerie', (request, response, next) => {
  response.sendFile(__dirname + '/views/galerie.html');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});