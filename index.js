require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));

const routes_autenticacao = require('./src/routes/routes_autenticacao');
const routes_artista = require('./src/routes/routes_artista');
const routes_obra = require('./src/routes/routes_obra');
server.use(routes_autenticacao);
server.use(routes_artista);
server.use(routes_obra);

server.listen(3000, () => {
    console.log('API ONLINE');
})
