const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');

router.post('/artista/', controller.criarArtista);
router.delete('/artista/:id', controller.deletarArtista);
router.put('/artista/:id', controller.alterarDadosArtista);
router.get('/artista/', controller.buscarTodosOsArtistas);
router.get('/artista/:id', controller.buscarUmArtistaPeloID);
router.post('/upload/', controller.upload);

module.exports = router;