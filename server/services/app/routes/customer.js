const express = require('express');
const router = express.Router();
const ConItem = require('../controllers/item');

router.get('/item', ConItem.showItem)

module.exports = router;