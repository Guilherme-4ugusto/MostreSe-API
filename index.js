require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));

const autenticacaoRoutes = require('./src/routes/AuthenticationRoutes');
const artistRoutes = require('./src/routes/ArtistRoutes');
const workRoutes = require('./src/routes/WorkRoutes');
const categoryRoutes = require('./src/routes/CategoryRoutes');
server.use(autenticacaoRoutes);
server.use(artistRoutes);
server.use(workRoutes);
server.use(categoryRoutes);

server.listen(3000, () => {
    console.log('API ONLINE');
})
