const db = require('../models/libraryModels');
/********************************************\
 * apiController.js
 * 
 * middleware controller for API calls
 * 
\********************************************/
// const path = require('path');

// future database interactios here !

// declare the apiController object to which we will add middleware methods
const apiController = {};


// FIND CATEGORIES

apiController.getCategories = (req, res, next) => {

  const userId = req.body.user.id;

  const sqlQuery = {
    text: `SELECT DISTINCT categories.id, categories.name
          FROM bookmarks, categories
          WHERE bookmarks.category_id = categories.id
          AND user_id = $1;`,
    values: [userId]
  };

  //console.log("SQL QUERY ", sqlQuery);
  db.query(sqlQuery)
    .then(data => {
      console.log("SQL DATA ", data);
      res.locals.categories = data.rows;
      return next();
    })
    .catch(err => { return next(err) });
};


apiController.getBookmarks = (req, res, next) => {

  const userId = req.body.user.id;;
  const catId = req.body.category.id;  // <<< COMING FROM REACT (TASH)
  // console.log('RESULT', catId)

  const sqlQuery = {
    text: `SELECT *
          FROM bookmarks
          WHERE bookmarks.category_id = $1
          AND user_id = $2;`,
    values: [catId, userId]
  };

  //console.log("SQL QUERY ", sqlQuery);
  db.query(sqlQuery)
    .then(data => {
      console.log("SQL DATA ", data);
      res.locals.bookmarks = data.rows;
      return next();
    })
    .catch(err => { return next(err) });
};


apiController.addBookmark = (req, res, next) => {

  const {title, url, thumbnail, caption, category_id, user_id} = req.body

  const sqlQuery = {
      text:   `INSERT INTO bookmarks (title, url, thumbnail, caption, category_id, user_id)
              VALUES ($1, $2, $3, $4, $5, $6)`,
      values: [title, url, thumbnail, caption, category_id, user_id]
  }

  console.log(sqlQuery)

  db.query(sqlQuery)
    .then(data => { return next(); })
    .catch(err => { return next(err) });
};


apiController.removeBookmark = (req, res, next) => {

  const {bookmarkId} = req.body.bookmark.id
  const sqlQuery = {
      text:   `DELETE FROM bookmarks 
            WHERE bookmarks.id = $1`,
      values: [bookmarkId]
  }

  console.log(sqlQuery)

  db.query(sqlQuery)
    .then(data => { return next(); })
    .catch(err => { return next(err) });
};



module.exports = apiController;