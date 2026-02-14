const express = require('express');
const { getContent, updateContent } = require('../controllers/contentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getContent);
router.put('/', authMiddleware, updateContent);

module.exports = router;
