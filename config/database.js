const mongoose = require('mongoose');

const url = "mongodb+srv://dev:hXa2X23mQvg9Y4x6@cluster0.kppfn.mongodb.net/mostrese?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true});

module.exports = mongoose;
