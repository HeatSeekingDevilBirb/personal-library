//const User
const { ModuleFilenameHelpers } = require('webpack');
const db = require('../models/libraryModels');

const userController = {};

userController.newUser = (req, res, next) => {
  const { username, password, email } = req.body;
  console.log(req.body);
  const newUserQuery = `INSERT INTO users (username, password, email)
    VALUES ($1, $2, $3)`;
  const values = [username, password, email];
  db.query(newUserQuery, values)
    .then((response) => {
      res.locals.userTable = `${response.rowCount} account created`;
      console.log('res.locals.userTable', res.locals.userTable);
      console.log('response.rowCount', response.rowCount);
      return next();
    })
    .catch((err) => {
      next(err);
    });
};

userController.checkUser = (req, res, next) => {
  const checkUserQuery = `SELECT * FROM users WHERE username = $1 AND password = $2`;
  const { username, password } = req.body;
  console.log(req.body);
  const values = [username, password];

  db.query(checkUserQuery, values)
    .then((response) => {
      //console.log(response.rows);
      res.locals.users = response.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

userController.getAllUsers = (req, res, next) => {};

module.exports = userController;
