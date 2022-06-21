require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const dbRouter = require('./routes/dbRouter');

app.use(express.json());

app.get('/build/bundle.js', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '..', 'build', 'bundle.js'));
});

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.use('/api', dbRouter);

app.listen(3000);