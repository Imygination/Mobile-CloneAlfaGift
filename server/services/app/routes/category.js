const express = require('express');
const router = express.Router();
const conCategory = require('../controllers/category');


router.get('/', conCategory.showCategory)


module.exports = router;