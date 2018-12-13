const passport = require('passport');
const bcrypt = require('bcryptjs');

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
      res.status(200).send(newUser);
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
      res.status(200).send(user);
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
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.send('heheh');
    }
  );
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};