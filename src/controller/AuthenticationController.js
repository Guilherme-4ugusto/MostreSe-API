const AdminModel = require('../model/AdminModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthenticationController {
    async insert(req, res) {
        const admin = new AdminModel(req.body);
        await admin
            .save()
            .then(response => {
                response.password = undefined;
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async authenticate(req, res) {
        const{email, password} = req.body;
        const admin = await AdminModel.findOne({ email }).select('+password');
        if(!admin){
            return res.status(400).send({error: 'Usuário não cadastrado.'});
        }else if(!await bcrypt.compare(password, admin.password)){
            return res.status(400).send({error: 'Senha inválida.'});
        }else{
            admin.password = undefined;

            const token = jwt.sign({ id: admin.id}, process.env.JWT_SECRET, {
                expiresIn: 86400,
            });

            return res.status(200).send({admin, token}); 
        }
    }

}

module.exports = new AuthenticationController();