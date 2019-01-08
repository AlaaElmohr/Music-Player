const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator=require('validator');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const schema = new Schema({
 
  trackId:{
    type:String,
    require:true,
  },

});

schema.plugin(mongooseUniqueValidator);

module.exports = schema;
