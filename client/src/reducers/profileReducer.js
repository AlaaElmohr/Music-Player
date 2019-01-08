import { GET_PROFILE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_PROFILE:
      return action.payload || false;

    default:
      return state;
  }
}
