const User=require('../models/User');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/follow',requireLogin,async(req,res)=>{
   const { name, image } = req.body;
   const id;
   try{
     let user=await User.findById(id);
     user.following = {
        name,
        image
      }.save();
      user.following.push(following);
      res.status(200).send(following);
     
   } catch(err){
     res.status(400).send(err);
   }
  });
  app.get('/api/follow',requireLogin,async(req,res)=>{
    const id;
    try{
      const user=await User.findById(id);
       res.status(200).send(user.following);
      
    } catch(err){
      res.status(400).send(err);
    }
   });
   app.get('/api/follow/:id',requireLogin,async(req,res)=>{
    const id;
    try{
      const user=await User.findById(id);
      await user.following.reduce((following)=>{
         return following.id !== req.params.id
      })
      res.status(200).send(user.following);
      
    } catch(err){
      res.status(400).send(err);
    }
   });
};