const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer(require('../config/UploadConfig'));

const artistaController = require('../controller/ArtistaController');
const obraController = require('../controller/ObraController');

router.post('/artista/', upload.single('foto'), artistaController.inserir);
router.delete('/artista/:id', artistaController.deletar);
router.put('/artista/:id', artistaController.atualizar);
router.get('/artista/', artistaController.obterTodos);
router.get('/artista/:id',  artistaController.obterPorId);

router.post('/obra/', obraController.inserir);
router.delete('/obra/:id', obraController.deletar);
router.put('/obra/:id', obraController.atualizar);
router.get('/obra/', obraController.obterTodos);
router.get('/obra/:id',  obraController.obterPorId);



module.exports = router;