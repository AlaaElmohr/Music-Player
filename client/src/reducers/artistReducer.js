import { GET_ARTIST_LIKE } from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case GET_ARTIST_LIKE:
      return action.payload || false;

    default:
      return state;
  }
}
