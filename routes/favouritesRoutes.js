const User=require('../models/User');
const jwt = require('jsonwebtoken');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app,spotifyApi) => {
 app.post('/api/favourites',requireLogin,async(req,res)=>{
   const { trackId } = req.body;
   const id = jwt.decode(req.headers['authorization']).user._id;
   try{
     let user=await User.findById(id);
      if(user.favourites == undefined){
        const songs={trackId}
        user.favourites= {songs};

      }
      else{
      user.favourites.songs.push({trackId});
      }
      await user.save();
      res.status(200).send(user);
     
   } catch(err){
     res.status(400).send(err);
   }
  });
  app.get('/api/favourites',requireLogin,async(req,res)=>{
    const id = jwt.decode(req.headers['authorization']).user._id;
    tracks=[];
    try{
      let user=await User.findById(id);
      if(user.favourites){
        tracks=await user.favourites.songs.map((song)=>{
          return spotifyApi.getTrack(song.trackId)
      })     
      const result=await Promise.all(tracks);
       res.status(200).send(result);
      }
      else{
        res.status(200).send('');

      }
      
      
    } catch(err){
      res.status(400).send(err);
    }
   });
   app.delete('/api/favourites',requireLogin,async(req,res)=>{
    const { trackId } = req.body;
    const id = jwt.decode(req.headers['authorization']).user._id;
    try{
      let user=await User.findById(id);
      user.favourites.songs.map((song,index)=>{
         if(song.trackId === trackId){
            user.favourites.songs.splice(index);
         }
      })
       await user.save();
       res.status(200).send(user);
      
    } catch(err){
      res.status(400).send(err);
    }
   });
  
};