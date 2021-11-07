const ArtistaModel = require('../model/ArtistaModel')

class ArtistaController {
    async criarArtista(req, res){
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

    async deletarArtista(req, res){
        await ArtistaModel.deleteOne({'_id': req.params.id})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async alterarDadosArtista(req, res){
        await ArtistaModel.findByIdAndUpdate({'_id':req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }

    async buscarTodosOsArtistas(req, res){
        await ArtistaModel.find({})
        .sort('when')
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        });
    }

    async buscarUmArtistaPeloID(req, res){
        await ArtistaModel.findById(req.params.id)
        .then(response => {
            if(response)
             return res.status(200).json(response);
            else
             return res.status(404).json({error: 'Artista não encontrado.'});
        })
        .catch(error => {
           return res.status(500).json(error); 
        });
    }


}

module.exports = new ArtistaController();
