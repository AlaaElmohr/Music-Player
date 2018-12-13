const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator=require('validator');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url:{
    type:String,
    require:true,
  },
  singerName:{
    type:String,
    require:true,
  },
  image:{
    type: String,
  },
});

schema.plugin(mongooseUniqueValidator);

module.exports = schema;
