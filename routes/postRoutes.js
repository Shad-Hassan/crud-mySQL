const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Handle POST request to /post/news
router.post('/news', postController.insertNewsData);

module.exports = router;
