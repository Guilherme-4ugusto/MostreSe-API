require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));

const autenticacaoRoutes = require('./src/routes/AutenticacaoRoutes');
const artistaRoutes = require('./src/routes/ArtistaRoutes');
const obraRoutes = require('./src/routes/ObraRoutes');
server.use(autenticacaoRoutes);
server.use(artistaRoutes);
server.use(obraRoutes);

server.listen(3000, () => {
    console.log('API ONLINE');
})
