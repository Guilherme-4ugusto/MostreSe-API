const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const routes = require('./routes/routes');
server.use('/artista', routes);


server.listen(3000, () => {
    console.log('API ONLINE');
})