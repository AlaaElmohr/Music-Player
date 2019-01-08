import { FOLLOW_ARTIST, IS_FOLLOW } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FOLLOW_ARTIST:
      return action.payload || false;
    case IS_FOLLOW:
      return action.payload || false;
    default:
      return state;
  }
}
