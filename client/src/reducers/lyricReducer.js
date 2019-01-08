import { GET_LYRIC } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case GET_LYRIC:
      return action.payload || false;
    
    default:
      return state;
  }
}
