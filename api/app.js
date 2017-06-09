const express = require('express');

const app = express();

const tasks = [];

const generatedId = (arr) => arr.length + 1;

app.post('/tasks', (req, res) => {
  res.send('Hello World!');
});

app.get('/tasks', (req, res) => {
  res.send('Hello World!');
});

app.get('/tasks/:id/:name/:time/:descr', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    id: req.params.id,
    name: req.params.name,
    time: req.params.time,
    descr: req.params.descr,
  }));
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
