const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer(require('../config/UploadConfig'));

const artistaValidation = require('../middleware/ArtistaValidation');
const deleteImage = require('../middleware/DeleteImage');
const tokenValidation = require('../middleware/TokenValidation');

const artistaController = require('../controller/ArtistaController');


router.post('/artista/',tokenValidation, upload.single('foto_artista'), artistaValidation, artistaController.inserir);
router.delete('/artista/:id',tokenValidation, deleteImage, artistaController.deletar);
router.put('/artista/:id',tokenValidation, deleteImage, upload.single('foto_artista'), artistaValidation, artistaController.atualizar);
router.get('/artista/', artistaController.obterTodos);
router.get('/artista/:id',  artistaController.obterPorId);

module.exports = router;