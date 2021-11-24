const AdminModel = require('../model/AdminModel');

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
}

module.exports = new AutenticacaoController();