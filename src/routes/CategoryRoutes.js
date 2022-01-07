const express = require('express');
const router = express.Router();

const categoryValidation = require('../middleware/CategoryValidation');
const tokenValidation = require('../middleware/TokenValidation');
const objectIDValidation = require('../middleware/ObjectIDValidation')
const categoryController = require('../controller/CategoryController');


router.post('/categoria/', tokenValidation, categoryValidation.hasRequiredFields, categoryController.insert);
router.delete('/categoria/:id', tokenValidation, objectIDValidation, categoryController.delete);
router.put('/categoria/:id', tokenValidation, objectIDValidation, categoryController.update);
router.get('/categoria/', categoryController.findAll);
router.get('/categoria/:id', objectIDValidation, categoryController.findById);

module.exports = router;