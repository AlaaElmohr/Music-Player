import { GET_PLAYLISTS} from '../actions/types';

export default function(state = [], action) {

  switch (action.type) {
    case GET_PLAYLISTS:
      return action.payload || false;

    default:
      return state;
  }
}
