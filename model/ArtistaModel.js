const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ArtistaSchema = new Schema({
    nm_artista: {type: String, require: true},
    hist_artista: {type: String, require: false},
    nasc_artista: {type: String, require: true},
    inst_artista: {type: String, require: false},
    tel_artista: {type: Number, require: false},
    face_artista: {type: String, require: false},
    deez_artista: {type: String, require: false},
    yt_artista: {type: String, require: false},
    spty_artista: {type: String, require: false},
    twit_artista: {type: String, require: false},
    email: {type: String, require: false},
    categoria_artista: {type: String, require: true}
});

module.exports = mongoose.model('Artista', ArtistaSchema);

