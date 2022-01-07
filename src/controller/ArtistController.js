const ArtistModel = require('../model/ArtistModel')
const categoryController = require('../controller/CategoryController');
const Util = require('../util/Util')

class ArtistController {

    async insert(req, res) {
        await ArtistModel(req.body)
            .save()
            .then(response => {
                ArtistModel.findByIdAndUpdate(response._id,
                    { $push: { categories: req.params.id } },
                    { new: true, useFindAndModify: false }
                ).then(
                );
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async validateCategory(req, res, next) {
        const categoryId = (req.params.id);
        if (!categoryId) {
            return res.status(500).json({ error: "Informe a categoria desse artista." });
        } else if (!(await categoryController.checkIfExistsById(categoryId))) {
            return res.status(500).json({ error: "Categoria não encontrada." });
        }
        next();
    }

    async delete(req, res) {
        await ArtistModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async update(req, res) {
        await ArtistModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    updateWork(req, res) {
        ArtistModel.findByIdAndUpdate(req.params.id,
            { $push: { works: res._id } },
            { new: true, useFindAndModify: false }
        ).then();
    }

    async findAll(req, res) {
        await ArtistModel.find({})
            .sort('when')
            .populate("works", '-artists')
            .populate("categories")
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }
    async findById(req, res) {
        await ArtistModel.findById(req.params.id).populate("works", '-artists').populate("categories")
            .then(response => {
                return res.status(200).json(response ? response : { error: 'Artista não encontrado.' });
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async checkIfExistsById(id) {
        return await ArtistModel.exists({ '_id': id });
    }

}

module.exports = new ArtistController();
