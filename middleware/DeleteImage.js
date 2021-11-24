const ArtistaModel = require('../model/ArtistaModel');
const fs = require('fs');
const path = require('path');
const aws = require('aws-sdk');
const s3 = new aws.S3();
const {
    promisify
} = require('util');

const DeleteImage = async (req, res, next) => {

    let artista = await ArtistaModel.findById(req.params.id);

    function deletarArquivos(artista) {
        if (process.env.STORAGE_TYPE === `s3`) {
            return s3.deleteObject({
                Bucket: process.env.BUCKET_NAME,
                Key: artista.key_foto,
            }).promise()
        } else {
            return promisify(fs.unlink)(
                path.resolve(__dirname, "../", "uploads", "images", artista.key_foto)
            );
        }
    }

    deletarArquivos(artista);
    next();
}
module.exports = DeleteImage;