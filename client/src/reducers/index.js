import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import searchReducer from './searchReducer';
import profileReducer from './profileReducer';
import followReducer from './followReducer';
import playlistReducer from './playlistReducer';
import favouritesReducer from './favouritesReducer';
import tracksReducer from './tracksReducer';
import tracksAlbumReducer from './tracksAlbumReducer';
import newReleaseReducer from './newReleaseReducer';
import artistReducer from './artistReducer';
import lyricReducer from './lyricReducer';
import recommendationReducer from './recommendationReducer';
import audioTrackReducer from './audioTrackReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  newRelease:newReleaseReducer,
  artists:artistReducer,
  search: searchReducer,
  lyrics:lyricReducer,
  audioTrack:audioTrackReducer,
  recommendations:recommendationReducer,
  profile: profileReducer,
  follow:followReducer,
  playlist:playlistReducer,
  favourite:favouritesReducer,
  tracks:tracksReducer,
  tracksAlbum:tracksAlbumReducer,
  form: reduxForm
});
export default rootReducer;
