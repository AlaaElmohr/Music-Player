import { GET_NEW_RELEASE} from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case GET_NEW_RELEASE:
      return action.payload || false;

    default:
      return state;
  }
}
