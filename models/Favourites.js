const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator=require('validator');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const SongSchema = require('./Song');

const schema = new Schema({
  songs:[SongSchema]

});

schema.plugin(mongooseUniqueValidator);

module.exports = schema;
