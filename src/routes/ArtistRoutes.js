const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer(require('../config/UploadConfig'));

const { artistHandler } = require('../util/AWSHandler');
const artistValidation = require('../middleware/ArtistValidation');
const tokenValidation = require('../middleware/TokenValidation');
const util = require('../util/Util');
const artistController = require('../controller/ArtistController');


router.post('/artista/:id', tokenValidation, upload.single('link_aws_image'), artistValidation.hasRequiredFields, artistController.validateCategory, artistController.insert);
router.delete('/artista/:id', tokenValidation, artistHandler, artistController.delete);
router.put('/artista/:id', tokenValidation, util.isValidIdFormat, artistHandler, upload.single('link_aws_image'), artistController.update);
router.get('/artista', artistController.findAll);
router.get('/artista/:id', artistController.getWorkPopulate);

module.exports = router;