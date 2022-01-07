const AdminModel = require('../model/AdminModel');
const bcrypt = require('bcrypt');

const adminValidation = async (req, res, next) => {

    const { name, email, password } = req.body;
    const isUpdate = req.params.id;
    if (!isUpdate) {
        if (!name) {
            return res.status(400).json({ error: 'nome é obrigatorio!' });
        } else if (!email) {
            return res.status(400).json({ error: 'email é obrigatorio!' });
        } else if (!password) {
            return res.status(400).json({ error: 'senha é obrigatoria!' });
        }
    }
    if (email) {
        let existsEmail = await AdminModel.findOne({
            'email': {
                '$eq': email
            }
        });

        if (existsEmail) {
            return res.status(400).json({ error: 'já existe um cadastro com esse email' });
        }
    }

    req.body.password = await bcrypt.hash(password, 10);;

    next();

}

module.exports = adminValidation;