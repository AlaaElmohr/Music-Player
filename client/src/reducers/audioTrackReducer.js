import { PLAY_AUDIO } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case PLAY_AUDIO:
      return action.payload || false;
    default:
      return state;
  }
}
