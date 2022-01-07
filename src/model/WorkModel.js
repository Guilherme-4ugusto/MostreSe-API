const mongoose = require('../config/Database');
const Schema = mongoose.Schema;

const workSchema = new Schema( {
 name: {type: String, required:true},
 compositor: {type: String, required:true},
 link_aws_music: {type:String, required:false},
 aws_key: {type: String, required: false},
 created_date: {type: Date, default: Date.now},
 artists: [
     {
         type: Schema.Types.ObjectId,
         ref: "artist",
         required: true
     }
 ]
});


module.exports = mongoose.model('work', workSchema);