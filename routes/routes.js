const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = require('../model/UploadModel');

const upload = multer({ storage });

const controller = require('../controller/ArtistaController');

router.post('/artista/', upload.single('foto'), controller.criarArtista);
router.delete('/artista/:id', controller.deletarArtista);
router.put('/artista/:id', controller.alterarDadosArtista);
router.get('/artista/', controller.buscarTodosOsArtistas);
router.get('/artista/:id',  controller.buscarUmArtistaPeloID);



module.exports = router;