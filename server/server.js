/********************************************\
 * server.js
 * 
 * Node Express server
 * 
\********************************************/

const express = require('express');
const app = express();
const path = require('path');

/**
 * Add any external route controllers here.
 * 
 * template: 
 * const <labelForController> = require('<path to file containing controller>');
 * 
 * e.g.:
 * const contactController = require('./controllers/contactController.js');
 */
const apiController = require('./controllers/apiController.js');

// declare port id
const PORT = 3000;

// Future Database connection here?

// parse any parameters encoded within the URL and
// add them to req.params
app.use(express.urlencoded({ extended: true }));

// parse any json data encoded within the request body and
// add it to req.body
app.use(express.json());

// serve static data
app.use(express.static(path.resolve(__dirname, '../client/static/')));

// serve static bundle files
app.use('/dist', express.static(path.resolve(__dirname, '../dist/')));

// HIGHLEVEL ROUTING
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/api', apiController.doge, (req, res) => {
  res.status(200).send(res.locals.controllerTest);
});

// 404 routing
app.use((req, res) => {
  //res.status(404).sendFile(path.resolve(__dirname, '../client/static/status404.html'));
  res.status(404).send('We regret to inform you that the desired page was not found.');
})

// Global error handler
app.use((error, req, res, next) => {
  
  console.log(error.log);
  res.status(500); // set status to 500 by default
  if (error.status) {
    res.status(error.status);
  }
  res.send(error.message);
  
});

// invoke the listener on the specified port
// color is set by ANSI color code
// https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html
// reset color: \u001b[0m
app.listen(PORT, () => {
  console.log(`\u001b[38;5;39mListening at \u001b[38;5;51mhttp://localhost:${PORT}\u001b[0m`);
});
