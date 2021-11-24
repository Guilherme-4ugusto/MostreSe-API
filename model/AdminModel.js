const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    nome: {type: String, required: true},
    email: {type: String, unique: true, required: true, lowercase: true},
    senha: {type: String, required: true, select: false},
    data_criacao: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Admin', AdminSchema)