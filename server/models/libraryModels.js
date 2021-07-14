const { Pool } = require('pg');
const PG_URI = require('../uri');

/*
DB Setup
PG_URI is a private variable which is not checked into source control.

To config the app with DB URI:

1. Add a uri.js file to project root folder
3. in uri.js:
const uri = '<insert your db url here>';
module.exports = uri;

https://www.elephantsql.com/docs/index.html
*/

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
