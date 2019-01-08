import { GET_RECOMMENDATION } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_RECOMMENDATION:
      return action.payload || false;

    default:
      return state;
  }
}
