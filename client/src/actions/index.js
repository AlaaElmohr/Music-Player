import axios from 'axios';
import { LOGIN_EMAIL,LOGIN_GOOGLE,SIGNUP_EMAIL, SEARCH, GET_PROFILE,FOLLOW_ARTIST,UNFOLLOW_ARTIST,LOGOUT,IS_FOLLOW,NEW_PLAYLIST ,GET_PLAYLISTS,UPDATE_PLAYLIST
  ,ADD_FAVOURITE,DELETE_FAVOURITE,GET_FAVOURITES, GET_TRACKS,GET_ALBUM_TRACKS, GET_NEW_RELEASE, GET_ARTIST_LIKE,GET_LYRIC,GET_RECOMMENDATION,PLAY_AUDIO
} from './types';
import { headers,header } from './config';
export const signupWithEmail = (user,history) => async dispatch => {
  const res = await axios.post('/api/auth/signup', user,{headers:header});
  console.log("token"+res.data.token);
  localStorage.setItem('token',res.data.token);
  localStorage.setItem('id',res.data.userId);
  history.push({
    pathname: '/'  });
  dispatch({ type: SIGNUP_EMAIL, payload: res.data});
};
export const loginWithEmail = (user,history) => async dispatch => {
  const res = await axios.post('/api/auth/login', user,{headers:header});
  localStorage.setItem('token',res.data.token);
  localStorage.setItem('id',res.data.userId);
  history.push({
    pathname: '/'
  });
  dispatch({ type: LOGIN_EMAIL, payload: res.data});
};
export const loginWithGoogle = () => async dispatch => {
  const res = await axios.get('/auth/google/currentUSer',{headers:header});
  
  localStorage.setItem('token',res.data.token);
  localStorage.setItem('id',res.data.userId);
  dispatch({ type: LOGIN_GOOGLE, payload: res.data});
};
export const logout = () => async dispatch => {
  localStorage.clear();
  dispatch({ type: LOGOUT, payload: ''});
};
export const searchOnSpotify = (data,type,history) => async dispatch => {
  const res = await axios.get(`/api/search/:${data}/:${type}`,{headers});
  history.push('/search',{type:type,singer:data});
  if(type=='song'){
    dispatch({ type: SEARCH, payload: [res.data.tracks.tracks.items,res.data.playlists.playlists.items]});
  }
  if(type=="artist"){
    dispatch({ type: SEARCH, payload: [res.data.tracks.tracks.items,res.data.playlists.playlists.items,res.data.artists.artists.items]});

  }
};
export const getProfile = (id,history) => async dispatch => {
  const res = await axios.get(`/api/profile/${id}`,{headers});
  history.push('/profile');
  dispatch({ type: GET_PROFILE, payload: [res.data.profile,res.data.artists.artists,res.data.albums,res.data.topTracks]});
};
export const isFollow= id => async dispatch => {
  const res = await axios.get(`/api/follow/${id}`,{headers});
  dispatch({ type: IS_FOLLOW, payload: res.data});
};
export const followArtist= idSpotify => async dispatch => {
  const body = {idSpotify};
  const res = await axios.post('/api/follow',body,{headers});
  dispatch({ type: FOLLOW_ARTIST, payload: res.data});
};
export const unFollowArtist= id => async dispatch => {
  const res = await axios.delete(`/api/follow/${id}`,{headers});
  dispatch({ type: UNFOLLOW_ARTIST, payload: res.data});
};
export const addNewPlayList= (name,trackId,imageUrl,history)=> async dispatch => {
  const body = {name,trackId,imageUrl};
  const res = await axios.post('/api/playlist',body,{headers});
  dispatch({ type: NEW_PLAYLIST, payload: res.data});
  history.push({
    pathname: 'playlists',
    state:'refresh'
  });
};
export const getPlayLists= ()=> async dispatch => {
  const res = await axios.get('/api/playlist',{headers});   
  dispatch({ type: GET_PLAYLISTS, payload: res.data});
};
export const getTracks= (songs,history)=> async dispatch => {
  let params=[...songs];
  const res = await axios.get(`/api/search/track/${params}`,{headers});  
  history.push({
    pathname: 'playlist',
    search: 'track',
  });
  dispatch({ type: GET_TRACKS, payload: res.data});
};
export const getAlbumTracks= (id,image,history)=> async dispatch => {
  const res = await axios.get(`/api/search/trackFromAlbum/${id}`,{headers});  
  history.push({
    pathname: 'playlist',
    search: 'tracks',
    state: { image: image }

  });
  dispatch({ type: GET_ALBUM_TRACKS, payload: res.data});
};
export const getNewRelease= ()=> async dispatch => {
  const res = await axios.get('/api/search/newRelease');  
  dispatch({ type: GET_NEW_RELEASE, payload: res.data.albums});
};
export const getArtistYouMayLike= ()=> async dispatch => {
  const res = await axios.get('/api/search/artistYouMayLike',{headers});  
  dispatch({ type: GET_ARTIST_LIKE, payload: res.data});
};
export const updatePlayList= (name,trackId,history)=> async dispatch => {
  const body = {name,trackId};
  const res = await axios.patch('/api/playlist',body,{headers});
  dispatch({ type: UPDATE_PLAYLIST, payload: res.data});
  history.push({
    pathname: 'playlists',
    state:'refresh'
  });
};
export const addFavourite= (trackId,history)=> async dispatch => {
  const body = {trackId};
  const res = await axios.post('/api/favourites',body,{headers});
  
  dispatch({ type: ADD_FAVOURITE, payload: res.data});
  history.push({
    pathname: 'playlists',
    state:'refresh'
  });
};
export const getFavourites= (name,trackId)=> async dispatch => {
  const res = await axios.get('/api/favourites',{headers});
  dispatch({ type: GET_FAVOURITES, payload: res.data});
};
export const deleteFavourite= (name,trackId)=> async dispatch => {
  const body = {trackId};
  const res = await axios.delete('/api/favourites',body,{headers});
  dispatch({ type: DELETE_FAVOURITE, payload: res.data});
};
export const getLyric= (title,singer)=> async dispatch => {
  const res = await axios.get(`/api/search/lyric/${title}/${singer}`,{headers:header});
  dispatch({ type: GET_LYRIC, payload: res.data});
};
export const getRecommendation= ()=> async dispatch => {
  const res = await axios.get('/api/Recommendation',{headers});
  dispatch({ type: GET_RECOMMENDATION, payload: res.data});
};
export const playAudio= (audioTrack,image,songTitle)=> async dispatch => {
  dispatch({ type: PLAY_AUDIO, payload: [audioTrack,image,songTitle]});
};

