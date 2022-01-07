const mongoose = require('../config/Database');

const objectIDValidation = (req, res, next) => {
   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(500).json({ error: "Formato do objectId é inválido. " });
   }

   next();
}


module.exports = objectIDValidation;