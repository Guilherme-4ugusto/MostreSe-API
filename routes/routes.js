const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');

router.post('/', controller.create);
router.delete('/:id', controller.delete);
router.put('/:id', controller.update);

module.exports = router;