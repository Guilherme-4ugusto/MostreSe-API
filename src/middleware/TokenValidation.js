const jwt = require('jsonwebtoken');

const tokenValidation = async (req, res, next) => {

    const authToken = req.headers.autorizacao;

    if (!authToken) {
        return res.status(401).send({ error: 'O token não foi informado.' });
    }

    const parts = authToken.split(' ');
    const [scheme, token] = parts;

    if (!parts.length > 1 || !/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Formato inválido do token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: 'Token invalido' });
        } else {
            req.adminId = decoded.id;
            next();
        }
    });
}

module.exports = tokenValidation;