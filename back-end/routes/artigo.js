const controller = require('../controllers/artigo');
const express = require('express');
const router = express.Router();

router.put('/', controller().novo);

module.exports = router;