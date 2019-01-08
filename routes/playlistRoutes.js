const User=require('../models/User');
const jwt = require('jsonwebtoken');

const requireLogin = require('../middlewares/requireLogin');

module.exports = (app,spotifyApi) => {
 app.post('/api/playlist',requireLogin,async(req,res)=>{
   const { name,trackId,imageUrl } = req.body;
   const id = jwt.decode(req.headers['authorization']).user._id;
   try{
     let user=await User.findById(id);
     const songs=[{trackId}];
     const playlist={name,songs,imageUrl}
      user.playlists.push(playlist);
      await user.save();
      res.status(200).send(user);
     
   } catch(err){
     res.status(400).send(err);
   }
  });
  app.get('/api/playlist',requireLogin,async(req,res)=>{
    playlists=[];
    const id = jwt.decode(req.headers['authorization']).user._id;
    searchTrack=async(id)=>{
      return await spotifyApi.getTrack('4JehYebiI9JE8sR8MisGVb');
    }
    try{
      const user=await User.findById(id);
        playlists=user.playlists.map((playlist)=>{
          return {name:playlist.name,imageUrl:playlist.imageUrl,songs:[playlist.songs.map((song)=>{  
           return song.trackId;
         })
        ]}  
      });
       res.status(200).send(playlists);        
     

    } catch(err){
      res.status(400).send(err);
    }
   });
   app.patch('/api/playlist',requireLogin,async(req,res)=>{
    const { trackId,name } = req.body;
    const id = jwt.decode(req.headers['authorization']).user._id;
    try{
      let user=await User.findById(id);
      user.playlists.map((playlist)=>{
         if(playlist.name === name){
           playlist.songs.push({trackId});
         }
      })
       await user.save();
       res.status(200).send(user);
      
    } catch(err){
      res.status(400).send(err);
    }
   });
  
};