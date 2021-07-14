/********************************************\
 * server.js
 * 
 * Node Express server
 * 
\********************************************/

const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api');
// const cors = require('cors'); // not actually needed

/**
 * Add any external route controllers here.
 *
 * template:
 * const <labelForController> = require('<path to file containing controller>');
 *
 * e.g.:
 * const contactController = require('./controllers/contactController.js');
 */
// const apiController = require('./controllers/apiController.js');

// declare port id
const PORT = 3000;

// add CORS functionality
// app.use(cors()); //not actually needed / proxy instead

// parse any parameters encoded within the URL and
// add them to req.params
app.use(express.urlencoded({ extended: true }));

// parse any json data encoded within the request body and
// add it to req.body
app.use(express.json());

// serve static data
app.use(express.static(path.resolve(__dirname, '../client')));

// serve static bundle files
app.use('/dist', express.static(path.resolve(__dirname, '../dist/')));

// HIGHLEVEL ROUTING
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.use('/api', apiRouter);

// 404 routing
app.use((req, res) => {
  //res.status(404).sendFile(path.resolve(__dirname, '../client/static/status404.html'));
  res.status(404).send('404: We regret to inform you that the desired page was not found.');
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { error: `An error occurred ${err}` },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);

  return res.status(errObj.status).json(errObj.message);
});

// invoke the listener on the specified port
// color is set by ANSI color code
// https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html
// reset color: \u001b[0m
module.exports = app.listen(PORT, () => {
  console.log(`\u001b[38;5;39mListening at \u001b[38;5;51mhttp://localhost:${PORT}\u001b[0m`);
});
