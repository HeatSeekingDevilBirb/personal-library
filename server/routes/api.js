const express = require('express');

const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/categories', apiController.getCategories, (req, res) =>
  res.status(200).json(res.locals.categories)
);

router.get('/allcategories', apiController.getAllCategories, (req, res) =>
  res.status(200).json(res.locals.categories)
);

router.get('/bookmarks/:userId/:categoryId', apiController.getBookmarks, (req, res) =>
  res.status(200).json(res.locals.bookmarks)
);

router.post('/bookmarks', apiController.addBookmark, (req, res) =>
  res.status(200).json({ msg: 'hey hey you just created a new bookmark' })
);

router.delete('/bookmarks', apiController.removeBookmark, (req, res) =>
  res.status(200).json({ msg: 'hey hey you just deleted a bookmark' })
);

router.put('/bookmarks', apiController.editBookmark, (req, res) =>
  res.status(200).json({ msg: 'edited the data' })
);

module.exports = router;
