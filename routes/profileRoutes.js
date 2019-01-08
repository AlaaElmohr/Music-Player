module.exports= (app,spotifyApi) => {
app.get('/api/profile/:id',async(req,res)=>{
  albums={albums:[],tracks:{}};
        result={albums:'',profile:'',artists:'',topTracks:''};
        try {
          const profile=await spotifyApi.getArtist(req.params.id);
          result.profile=profile.body;
          const artists=await spotifyApi.getArtistRelatedArtists(req.params.id);
          result.artists=artists.body;
          const topTracks=await spotifyApi.getArtistTopTracks(req.params.id, 'GB');
          result.topTracks=topTracks.body
          const albumsData=await spotifyApi.getArtistAlbums(req.params.id);
          const tracksData=albumsData.body.items.map((item)=>{
            return spotifyApi.getAlbumTracks(item.id)
          });
          tracks=await Promise.all(tracksData);
          albums.albums.push(albumsData.body);
          albums.tracks=tracks;

          result.albums=albums;
          res.status(200).send(result);
  
        } catch(err){
            res.status(400).send(err)
        }
  
  })
}
  