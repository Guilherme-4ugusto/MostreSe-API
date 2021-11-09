const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ObraSchema = new Schema( {
 nm_obra: {type: String, require:true},
 link_obra: {type:String, require:false},
 data_criacao: {type: Date, default: Date.now},
 compositor: {type: String, require:true}
});

module.exports = mongoose.model('Obra', ObraSchema);