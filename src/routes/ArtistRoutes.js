const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer(require('../config/UploadConfig'));

const { artistHandler } = require('../util/AWSHandler');
const artistValidation = require('../middleware/ArtistValidation');
const tokenValidation = require('../middleware/TokenValidation');
const objectIDValidation = require('../middleware/ObjectIDValidation')
const artistController = require('../controller/ArtistController');


router.post('/artista/:id', tokenValidation, objectIDValidation, upload.single('link_aws_image'), artistValidation.hasRequiredFields, artistController.validateCategory, artistController.insert);
router.delete('/artista/:id', tokenValidation, objectIDValidation,  artistHandler, artistController.delete);
router.put('/artista/:id', tokenValidation, objectIDValidation,  artistHandler, upload.single('link_aws_image'), artistController.update);
router.get('/artista', artistController.findAll);
router.get('/artista/:id', objectIDValidation, artistController.findById);

module.exports = router;