const music =  require('musicmatch')({apikey:'445d6196c08dc2b7490929f18149d684'});
module.exports= (app) => {
    app.get('/api/search/lyric/:song/:singer',async(req,res)=>{
      try{
     const track=await music.trackSearch({q_track:'Cheap Thrills',q_artist:'sia', page:1, page_size:1});
      const id=track.message.body.track_list[0].track.track_id;
      const lyric=await music.trackLyrics({track_id:id});
      res.status(200).send(lyric.message.body);
      } catch(e){
        res.status(400).send(e)      
      }    
    })
}