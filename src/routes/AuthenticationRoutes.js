const express = require('express');
const router = express.Router();

const adminValidation = require('../middleware/AdminValidation');
const tokenValidation = require('../middleware/TokenValidation');

const authenticationController = require('../controller/AuthenticationController');

router.post('/autenticacao/',tokenValidation, adminValidation ,authenticationController.insert);
router.post('/autenticacao/login', authenticationController.authenticate);

module.exports = router;