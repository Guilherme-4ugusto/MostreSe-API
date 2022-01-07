const express = require('express');
const router = express.Router();

const categoryValidation = require('../middleware/CategoryValidation');
const tokenValidation = require('../middleware/TokenValidation');
const util = require('../util/Util');
const categoryController = require('../controller/CategoryController');


router.post('/categoria/', tokenValidation, categoryValidation.hasRequiredFields, categoryController.insert);
router.delete('/categoria/:id', tokenValidation, categoryController.delete);
router.put('/categoria/:id', tokenValidation, categoryController.update);
router.get('/categoria/', categoryController.findAll);
router.get('/categoria/:id', categoryController.findById);

module.exports = router;