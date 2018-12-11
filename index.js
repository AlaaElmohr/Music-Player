const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport=require('passport');
const bodyParser = require('body-parser');
const authRoutes=require('./routes/authRoutes');
const keys=require('./config/keys');
require('./services/passport');
const app=express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Music-Player',{ useNewUrlParser: true });

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKeys]
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
 console.log("hello world")
})
