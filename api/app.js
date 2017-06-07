const express = require('express');

const app = express();

const tasks = [];

app.post('/tasks', (req, res) => {
  res.send('Hello World!');
});

app.get('/tasks', (req, res) => {
  res.send('Hello World!');
});

app.get('/tasks/:id/:name/:time', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ name: 'req.name' }));
});

app.put('/tasks/:id', (req, res) => {
  res.send('Hello World!');
});

app.delete('/tasks/:id', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
