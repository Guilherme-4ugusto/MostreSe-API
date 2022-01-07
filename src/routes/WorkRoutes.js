const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer(require('../config/UploadConfigMusic'));

const workValidation = require('../middleware/WorkValidation');
const { workHandler } = require('../util/AWSHandler');
const tokenValidation = require('../middleware/TokenValidation');
const util = require('../util/Util');
const workController = require('../controller/WorkController');

router.post('/obra/:id', tokenValidation,  upload.single('link_aws_music'), workValidation.hasRequiredFields, workValidation.hasAnyFile , workController.validateArtist, workController.insert);
router.delete('/obra/:id', tokenValidation,  workHandler, workController.delete);
router.put('/obra/:id', tokenValidation,  workHandler, upload.single('link_aws_music'), workValidation.hasAnyFile , workController.update);
router.get('/obra/', workController.findAll);
router.get('/obra/:id',  workController.findById);
router.get('/obra/artista/:id',  workController.getWorkPopulate);

module.exports = router;
