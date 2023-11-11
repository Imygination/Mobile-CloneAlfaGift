const express = require('express');
const router = express.Router();
const routerUser = require('./user')

router.use('/user', routerUser);

module.exports = router;