const AdminModel = require('../model/AdminModel');
const bcrypt = require('bcrypt');

const AdminValidation = async (req, res, next) => {

    const {
        nome,
        email,
        senha
    } = req.body;

    if (!nome)
        return res.status(400).json({
            error: 'nome é obrigatorio!'
        });
    else if (!email)
        return res.status(400).json({
            error: 'email é obrigatorio!'
        });
    else if (!senha)
        return res.status(400).json({
            error: 'senha é obrigatoria!'
        });
    else {
        let existsEmail;

        if (email) {
            existsEmail = await AdminModel.findOne({
                'email': {
                    '$eq': email
                }
            });
        }

        if (existsEmail) {
            return res.status(400).json({
                error: 'já existe um cadastro com esse email'
            });
        }

        const hash = await bcrypt.hash(senha, 10);
        req.body.senha = hash;

        next();
    }
}

module.exports = AdminValidation;