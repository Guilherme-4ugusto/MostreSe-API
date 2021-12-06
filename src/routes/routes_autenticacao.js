const express = require('express');
const router = express.Router();

const adminValidation = require('../middleware/AdminValidation');
const tokenValidation = require('../middleware/TokenValidation');

const autenticacaoController = require('../controller/AutenticacaoController');

router.post('/autenticacao/',tokenValidation, adminValidation ,autenticacaoController.inserir);
router.post('/autenticacao/login', autenticacaoController.logar);

module.exports = router;