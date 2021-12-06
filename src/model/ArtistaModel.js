const mongoose = require('../config/database');
const Schema = mongoose.Schema;


const ArtistaSchema = new Schema({
    nm_artista: {type: String, required: true},
    hist_artista: {type: String, required: false},
    nasc_artista: {type: String, required: true},
    inst_artista: {type: String, required: false},
    tel_artista: {type: Number, required: false},
    face_artista: {type: String, required: false},
    deez_artista: {type: String, required: false},
    yt_artista: {type: String, required: false},
    spty_artista: {type: String, required: false},
    twit_artista: {type: String, required: false},
    email: {type: String, required: false},
    categoria_artista: {type: String, required: true},
    foto_artista: {type: String, required: false},
    key_foto: {type: String, required: false},
    data_criacao: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Artista', ArtistaSchema);

