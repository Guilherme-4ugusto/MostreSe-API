const WorkModel = require('../model/WorkModel')
const artistController = require('../controller/ArtistController');
const Util = require('../util/Util')

class WorkController {

    async insert(req, res) {
        const obra = new WorkModel(req.body);
        await obra
            .save()
            .then(response => {
                 WorkModel.findByIdAndUpdate(response._id, 
                    { $push: { artists: req.params.id } },
                    { new: true, useFindAndModify: false }
                    ).then(
                    );
                   artistController.updateWork(req,res);
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });    
    }

    async getWorkPopulate(req,res) {
        return res.status(200).json(await WorkModel.findById(req.params.id).populate("artists", '-works'));
    }

    async validateArtist(req, res, next) {
        const artistId = (req.params.id);
        if (!artistId) {
            return res.status(500).json({ error: "Informe o artista dessa obra." });
        }else if(!Util.isValidIdFormat(artistId)){
            return res.status(500).json({ error: "Formato de ID para busca inválido.." });
        } else if (!(await artistController.checkIfExistsById(artistId))) {
            return res.status(500).json({ error: "Artista não encontrado." });
        }
        next();
    }
    

    async delete(req, res) {
        await WorkModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async update(req, res) {
        await WorkModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async findAll(req, res) {
        await WorkModel.find({})
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async findById(req, res) {
        await WorkModel.findById(req.params.id)
            .then(response => {
                return res.status(200).json(response ? response : { error: 'Obra não encontrada.' });
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }


}

module.exports = new WorkController();
