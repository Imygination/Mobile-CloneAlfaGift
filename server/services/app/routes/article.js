const express = require('express');
const router = express.Router();
const ConArticle = require('../controllers/article');
const {authorizDelete, authorizStatus} = require('../middleware/authorization');

router.get('/', ConArticle.showArticle);
router.get('/histories', ConArticle.showHistory);
router.post('/', ConArticle.createArticle);
router.get('/:id', ConArticle.findArticle);
router.put('/:id', ConArticle.updateArticle);
router.patch('/:id', authorizStatus, ConArticle.updateStatus);
router.delete('/:id', authorizDelete, ConArticle.deleteArticle);


module.exports = router;