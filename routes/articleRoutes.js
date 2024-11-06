const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Define route to get article by ID
router.get('/:id', articleController.getArticleById);

module.exports = router;
