const mongoose = require('../config/Database');


const isValidIdFormat = (id) => {
 return mongoose.Types.ObjectId.isValid(id);
}


module.exports = {
    isValidIdFormat
};