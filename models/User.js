const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator=require('validator');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const playListSchema = require('./playList');
const FavouritesSchema = require('./Favourites');
const FollowingSchema = require('./Following');

const schema = new Schema({
  googleId:{
    type: String
    },
  image:{
    type: String
  },
  email: {
    type: String
  },
  name:{
    type:String
  },
  password:{
    type:String
  },
  following:[FollowingSchema],
  playlists:[playListSchema],
  favourites:FavouritesSchema
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
