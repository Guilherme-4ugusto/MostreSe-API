const mongoose = require('../config/Database');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { type: String, required: true },
    created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('dev_category', categorySchema);