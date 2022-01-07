const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer(require('../config/UploadConfigMusic'));

const workValidation = require('../middleware/WorkValidation');
const { workHandler } = require('../util/AWSHandler');
const tokenValidation = require('../middleware/TokenValidation');
const objectIDValidation = require('../middleware/ObjectIDValidation')
const workController = require('../controller/WorkController');

router.post('/obra/:id', tokenValidation, objectIDValidation, upload.single('link_aws_music'), workValidation.hasRequiredFields, workController.validateArtist, workController.insert);
router.delete('/obra/:id', tokenValidation, objectIDValidation, workHandler, workController.delete);
router.put('/obra/:id', tokenValidation, objectIDValidation, workHandler, upload.single('link_aws_music'), workController.update);
router.get('/obra/', workController.findAll);
router.get('/obra/:id', objectIDValidation, workController.findById);


module.exports = router;
