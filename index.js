const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));

const routes = require('./routes/routes');
server.use(routes);

server.listen(3000, () => {
    console.log('API ONLINE');
})
