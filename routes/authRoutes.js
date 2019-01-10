const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const url = require('url');
const User=require('../models/User');

module.exports = app => {
  app.post('/api/auth/signup',async(req,res)=>{
   const { email, name, password } = req.body;
   try{
     const user=await User.findOne({email:req.body.email});
     if(!user){
      const newUser = await new User({
        email,
        name,
        password: bcrypt.hashSync(password, 10),
      }).save();
      const token = jwt.sign({user: newUser}, 'secret', {expiresIn: 7200});
      res.status(200).json({
        message: 'Successfull logged in',
        user:newUser.name,
        token: token,
        userId: newUser._id
    });
     }
   } catch(err){
     res.status(400).send(err);
   }
  });
  app.post('/api/auth/login',async(req,res)=>{
    try{
      const user=await User.findOne({email:req.body.email});
      if(!user) {
        res.status(500).send("this user haven't account");
      }
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        res.status(500).send('error in password');
      }
      const token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
      res.status(200).json({
        message: 'Successfull logged in',
        user:user.name,
        token: token,
        userId: user._id
    });
    } catch(err){
      res.status(400).send(err);
    }
   });
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );


  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/", session: false }),
    function(req, res) {
      const token = jwt.sign({user: req.user}, 'secret', {expiresIn: 7200});
      const result={
        message: 'Successfull logged in',
        user:req.user.name,
        token: token,
        userId: req.user._id
      };

      res.redirect(url.format({
        pathname:"https://music-player-app-1.herokuapp.com",
        query: {
           "token": token 
        },
      }));
      
    }
);
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};