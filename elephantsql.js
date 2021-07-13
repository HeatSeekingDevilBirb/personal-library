let pg = require('pg');

let conString =
  'postgres://nwapxbjr:2-TS-kGu0RkohcAfKtsjF5OP1gDUYFpk@kashin.db.elephantsql.com/nwapxbjr';

let client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error('cound not connect to postgres', err);
  }
  client.query('SELECT * FROM categories', function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    client.end();
  });
});
