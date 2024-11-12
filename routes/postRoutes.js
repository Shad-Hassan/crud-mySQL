const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Handle POST request to /post/news
router.post('/news', postController.insertNewsData);
router.post('/messages', postController.insertMessage);
router.post('/subscribe', postController.insertSubscriber);

module.exports = router;
