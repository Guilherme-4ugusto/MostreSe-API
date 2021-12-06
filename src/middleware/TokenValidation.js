const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

const TokenValidation = async (req, res, next) =>{
    const authHeader = req.headers.autorizacao;  
    
    if(!authHeader){
        return res.status(401).send({error: 'O token não foi informado.'});
    }
    
    const parts = authHeader.split(' ');

    if(!parts.lenght === 2){
        return res.status(401).send({error: 'Erro no token.'});
    }

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)){
       return res.status(401).send({error: 'Erro token mal formatado.'}) 
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err){ 
            return res.status(401).send({error: 'Token invalido'});
        }else{
            req.adminId = decoded.id; 
            next();  
        }
    });
}

module.exports = TokenValidation;