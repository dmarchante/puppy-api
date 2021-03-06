'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

// us eenvironment variable, or, if it's undefined, use 3000 by default
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/isitworking', (request, response) => {
  response.send('yes');
});

app.get('/bailey', (request, response) => {
  let baileyData = require('./data/puppy.json');
  response.send(baileyData);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
