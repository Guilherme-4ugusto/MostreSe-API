const mongoose = require('../config/Database');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: { type: String, required: true },
    birth_date: { type: String, required: true },
    biography: { type: String, required: false },
    email: { type: String, required: false },
    link_instagram: { type: String, required: false },
    link_telegram: { type: Number, required: false },
    link_facebook: { type: String, required: false },
    link_deezer: { type: String, required: false },
    link_youtube: { type: String, required: false },
    link_spotify: { type: String, required: false },
    link_twitter: { type: String, required: false },
    link_aws_image: { type: String, required: false },
    aws_key: { type: String, required: false },
    created_date: { type: Date, default: Date.now },
    works: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "dev_work",
            required: false
        }
    ],
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "dev_category",
            required: true
        }
    ]
});

module.exports = mongoose.model('dev_artist', artistSchema);

