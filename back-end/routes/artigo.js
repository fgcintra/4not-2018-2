const controller = require('../controllers/artigo');
const express = require('express');
const router = express.Router();

router.put('/', controller().novo);
router.get('/', controller().listar);
router.get('/:id', controller().obterUm);
router.patch('/', controller().atualizar);

module.exports = router;