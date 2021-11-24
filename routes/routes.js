const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer(require('../config/UploadConfig'));

const adminValidation = require('../middleware/AdminValidation');
const artistaValidation = require('../middleware/ArtistaValidation');
const obraValidation = require('../middleware/ObraValidation');
const deleteImage = require('../middleware/DeleteImage');

const artistaController = require('../controller/ArtistaController');
const obraController = require('../controller/ObraController');
const autenticacaoController = require('../controller/AutenticacaoController');

router.post('/artista/', upload.single('foto'), artistaValidation, artistaController.inserir);
router.delete('/artista/:id', deleteImage, artistaController.deletar);
router.put('/artista/:id',upload.single('foto'), artistaValidation, artistaController.atualizar);
router.get('/artista/', artistaController.obterTodos);
router.get('/artista/:id',  artistaController.obterPorId);

router.post('/obra/', obraValidation, obraController.inserir);
router.delete('/obra/:id', obraValidation, obraController.deletar);
router.put('/obra/:id', obraController.atualizar);
router.get('/obra/', obraController.obterTodos);
router.get('/obra/:id',  obraController.obterPorId);

router.post('/autenticacao/', adminValidation ,autenticacaoController.inserir);

module.exports = router;