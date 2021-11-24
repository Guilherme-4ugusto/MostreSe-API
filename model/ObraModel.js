const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ObraSchema = new Schema( {
 nm_obra: {type: String, required:true},
 link_obra: {type:String, required:false},
 data_criacao: {type: Date, default: Date.now},
 compositor: {type: String, required:true}
});

module.exports = mongoose.model('Obra', ObraSchema);