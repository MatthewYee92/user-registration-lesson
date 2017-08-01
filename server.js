const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express()
app.use(bodyParser.json());

// include users route here:

// Error handling middleware
app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.set('Content-Type', 'text/plain')
  res.status(500)
  res.send(err.message)
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('listening on port', port)
})
