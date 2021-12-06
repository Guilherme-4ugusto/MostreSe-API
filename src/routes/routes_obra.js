const express = require('express');
const router = express.Router();

const obraValidation = require('../middleware/ObraValidation');
const tokenValidation = require('../middleware/TokenValidation');

const obraController = require('../controller/ObraController');

router.post('/obra/',tokenValidation, obraValidation, obraController.inserir);
router.delete('/obra/:id',tokenValidation, obraValidation, obraController.deletar);
router.put('/obra/:id',tokenValidation, obraController.atualizar);
router.get('/obra/', obraController.obterTodos);
router.get('/obra/:id',  obraController.obterPorId);

module.exports = router;