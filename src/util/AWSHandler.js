const fs = require("fs");
const path = require("path");
const aws = require("aws-sdk");
const s3 = new aws.S3();
const { promisify } = require("util");

const artistModel = require("../model/ArtistModel");
const workModel = require("../model/WorkModel");

class AWSHandler {

  async artistHandler(req, res, next) {
    let exists = await artistModel.exists({ '_id': req.params.id });
    if (exists) {
      let artist = await artistModel.findById(req.params.id);
      if (!artist.aws_key) {
        deleteImage(artist.aws_key);
      }
    }
    next();
  }

  async workHandler(req, res, next) {
    let exists = await workModel.exists({ '_id': req.params.id });
    if (exists) {
      let work = await workModel.findById(req.params.id);
      if (!work.aws_key) {
        deleteMusic(work.aws_key);
      }
    }
    next();
  }

}

module.exports = new AWSHandler();

const deleteImage = async (key) => {
  deleteByKey(key, "images");
}

const deleteMusic = async (key) => {
  deleteByKey(key, "music");
}

const deleteByKey = async (key, localOfStorage) => {
  if (process.env.STORAGE_TYPE === `s3`) {
    return s3
      .deleteObject({
        Bucket: process.env.BUCKET_NAME,
        Key: key,
      })
      .promise();
  } else {
    return promisify(fs.unlink)(
      path.resolve(__dirname, "../", "uploads", localOfStorage, object.aws_key)
    );
  }
}