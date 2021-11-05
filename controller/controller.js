const ArtistaModel = require('../model/ArtistaModel')

class ArtistaController {
    async create(req, res){
        const artista = new ArtistaModel(req.body);
        await artista
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async delete(req, res){
        await ArtistaModel.deleteOne({'_id': req.params.id})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async update(req, res){
        await ArtistaModel.findByIdAndUpdate({'_id':req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }



}

module.exports = new ArtistaController();
