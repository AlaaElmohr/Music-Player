const User=require('../models/User');
const jwt = require('jsonwebtoken');

module.exports= (app,spotifyApi) => {
 app.get('/api/search/newRelease',async(req,res)=>{
    try{
    const albums=await spotifyApi.getNewReleases({ limit : 20, offset: 0, country: 'US' });
    res.status(200).send(albums.body)
    } catch(e){
      res.status(400).send(e)      
    }    
  })

  app.get('/api/search/artistYouMayLike',async(req,res)=>{
    const id = jwt.decode(req.headers['authorization']).user._id;
    try{
      const user=await User.findById(id);
      if(user.following[0]){
      const idSpotify =user.following[0].idSpotify;
      const artists=await spotifyApi.getArtistRelatedArtists(idSpotify);
      console.log("aert"+artists);
      res.status(200).send(artists.body)
      }
      res.status(200).send('')


    } catch(e){
      res.status(400).send(e)      
    }    
  })
  app.get('/api/search/trackFromAlbum/:id',async(req,res)=>{
    try{
    const tracks=await spotifyApi.getAlbumTracks(req.params.id);
    res.status(200).send(tracks.body)
    } catch(e){
      res.status(400).send(e)      
    }    
  })
  app.get('/api/search/track/:songs',async(req,res)=>{
    let track=await spotifyApi.getTracks([req.params.songs]);
    res.send(track.body)
    
   })
  app.get('/api/search/:data/:type',async(req,res)=>{
      result={tracks:'',artists:'',playlists:''};
      try {
        const data=await spotifyApi.searchTracks(req.params.data);
        result.tracks=data.body;
        if(req.params.type == ':artist'){
            const artists=await spotifyApi.searchArtists(req.params.data);
            result.artists=artists.body;
        }
        const playlists=await spotifyApi.searchPlaylists(req.params.data);
        result.playlists=playlists.body;
        res.status(200).send(result);

      } catch(err){
          res.status(400).send(err)
      }

  })

  app.get('/api/search',async(req,res)=>{
  result={tracks:'',artists:'',playlists:''};
    try {
      const data=await spotifyApi.getTrack('66BjcDhhwWCcQIBxHMpKXh');
      
      res.status(200).send(data.body);

    } catch(err){
        res.status(400).send(err)
    }

  })
}