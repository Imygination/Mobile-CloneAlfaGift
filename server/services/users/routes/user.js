const express = require('express');
const router = express.Router();
const ConUser = require('../controllers/user');

router.get('/', ConUser.findAllUser)
router.get('/:id', ConUser.findUser)
router.delete('/:id', ConUser.deleteUser)
router.post('/login', ConUser.loginUser)
router.post('/register', ConUser.createUser)

module.exports = router;