const CategoryModel = require('../model/CategoryModel')

class CategoryController {  

    async insert(req, res){         
        await CategoryModel(req.body)
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async delete(req, res){
        await CategoryModel.deleteOne({'_id': req.params.id})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async update(req, res){
        await CategoryModel.findByIdAndUpdate({'_id':req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }

    async findAll(req, res){
        await CategoryModel.find({})
        .sort('when')
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        });
    }

    async findById(req, res){
        await CategoryModel.findById(req.params.id)
        .then(response => {
        return res.status(200).json(response ? response : {error: 'Categoria não encontrado.'});
        })
        .catch(error => {
           return res.status(500).json(error); 
        });
    }

    async checkIfExistsById(id){
        return await CategoryModel.exists({'_id' : id});
    }

}

module.exports = new CategoryController();
