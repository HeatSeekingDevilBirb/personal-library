/********************************************\
 * apiController.js
 * 
 * middleware controller for API calls
 * 
\********************************************/
const path = require('path');

// future database interactios here !

// declare the apiController object to which we will add middleware methods
const apiController = {};


// ADD MIDDLEWARE TEMPLATE
apiController.doge = (req, res, next) => {
  const doge = 'D O G E';
  res.locals.controllerTest = doge;
  return next();  // keep an eye out in case this needs to become: return next();
};


module.exports = apiController;