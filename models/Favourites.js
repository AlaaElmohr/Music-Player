const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator=require('validator');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const SongSchema = require('./Song');

const schema = new Schema({
  songs:[{type: Schema.Types.ObjectId, ref: 'Song'}]

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Favourites', schema);
