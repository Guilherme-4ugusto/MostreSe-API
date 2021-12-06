const ObraModel = require('../model/ObraModel')

class ObraController {  

    async inserir(req, res){ 
        const obra = new ObraModel(req.body);
        await obra
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async deletar(req, res){
        await ObraModel.deleteOne({'_id': req.params.id})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async atualizar(req, res){
        await ObraModel.findByIdAndUpdate({'_id':req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }

    async obterTodos(req, res){
        await ObraModel.find({})
        .sort('when')
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        });
    }

    async obterPorId(req, res){
        await ObraModel.findById(req.params.id)
        .then(response => {
            if(response)
             return res.status(200).json(response);
            else
             return res.status(404).json({error: 'Obra não encontrada.'});
        })
        .catch(error => {
           return res.status(500).json(error); 
        });
    }


}

module.exports = new ObraController();
