const User=require('../models/User');
const jwt = require('jsonwebtoken');

const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
 app.post('/api/follow',requireLogin,async(req,res)=>{

   const { idSpotify } = req.body;
   
   const id = jwt.decode(req.headers['authorization']).user._id;
  
   try{
     let user=await User.findById(id);
     const follow={idSpotify};
      user.following.push(follow);
      await user.save();
      res.status(200).send(user);
     
   } catch(err){
     res.status(400).send(err);
   }
  });
  /*app.get('/api/follow',async(req,res)=>{
    const id;
    try{
      const user=await User.findById(id);
       res.status(200).send(user.following);
      
    } catch(err){
      res.status(400).send(err);
    }
   });
   app.delete('/api/follow',async(req,res)=>{
    const id;
    try{
      const user=await User.findById(id);
       res.status(200).send(user.following);
      
    } catch(err){
      res.status(400).send(err);
    }
   });*/
   app.get('/api/follow/:id',requireLogin,async(req,res)=>{
    const id = jwt.decode(req.headers['authorization']).user._id;
    try{
      const user=await User.findById(id);
      user.following=user.following.filter((following)=>{
         return following.idSpotify === req.params.id
      });
      res.status(200).send(user.following);
      
    } catch(err){
      res.status(400).send(err);
    }
   });
   app.delete('/api/follow/:id',requireLogin,async(req,res)=>{
    const id = jwt.decode(req.headers['authorization']).user._id;
    try{
      const user=await User.findById(id);
      user.following.map((follow,index)=>{
        if(follow.idSpotify == req.params.id){
          user.following.splice(index);
        }
      });
      await user.save();
      res.status(200).send(user.following);
      
    } catch(err){
      res.status(400).send(err);
    }
   });
};