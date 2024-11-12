const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Handle Client FOrm API
router.get('/messages', clientController.getAllMessages);
router.get('/subscriber', clientController.getAllSubscriber);

module.exports = router;
