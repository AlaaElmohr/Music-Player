const User=require('../models/User');
const jwt = require('jsonwebtoken');
const requireLogin = require('../middlewares/requireLogin');

module.exports= (app,spotifyApi) => {
    app.get('/api/recommendation',requireLogin,async(req,res)=>{    
        tracks=[];  
        allTracks=[];
        sortedTracks=[];
        function shuffle(array) {
          let currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }       
          return array;
        }
       const id = jwt.decode(req.headers['authorization']).user._id;
        try{
          const user=await User.findById(id);
          if(user.following.length>0){
          tracks=await user.following.map((artist)=>{
            return spotifyApi.getArtistTopTracks(artist.idSpotify,'US');
          })    
          console.log("tracks"+tracks);
          const result=await Promise.all(tracks); 
          console.log("rososos"+result)
          const counter=result.length*10;
          result.map((item)=>{
            item.body.tracks.map((track)=>{
              allTracks.push(track);
            })    
          })
          sortedTracks = shuffle(allTracks);

          res.status(200).send(sortedTracks);
        }else{
          res.status(200).send('');
        }
          
  
        } catch(err){
            res.status(400).send(err)
        }
  
    })
  }
  