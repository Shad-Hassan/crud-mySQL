const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/news', postController.insertNewsData);
router.post('/messages', postController.insertMessage);
router.post('/subscribers', postController.insertSubscriber);

module.exports = router;