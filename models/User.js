const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator=require('validator');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const playListSchema = require('./playList');
const FavouritesSchema = require('./Favourites');
const FollowingSchema = require('./Following');

const schema = new Schema({
  googleId:{
    type: String,
    required: true,
  },
  image:{
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  name:{
    type:String,
    require:true,
  },
  following:[{type: Schema.Types.ObjectId, ref: 'Following'}],
  playlists:[{type: Schema.Types.ObjectId, ref: 'playList'}],
  favourites:[{type: Schema.Types.ObjectId, ref: 'Favourites'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
