const AdminModel = require('../model/AdminModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');


class AutenticacaoController {
    async inserir(req, res) {
        const admin = new AdminModel(req.body);
        await admin
            .save()
            .then(response => {
                response.senha = undefined;
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async logar(req, res) {
        const{email, senha} = req.body;
        const admin = await AdminModel.findOne({ email }).select('+senha');
        if(!admin){
            return res.status(400).send({error: 'Usuario não existe'});
        }else if(!await bcrypt.compare(senha, admin.senha)){
            return res.status(400).send({error: 'Senha inválida'});
        }else{
            admin.senha = undefined;

            const token = jwt.sign({ id: admin.id}, authConfig.secret, {
                expiresIn: 86400,
            });

            return res.status(200).send({admin, token}); 
        }
    }

}

module.exports = new AutenticacaoController();