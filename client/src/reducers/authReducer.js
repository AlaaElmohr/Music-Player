import { SIGNUP_EMAIL,LOGIN_EMAIL,LOGIN_GOOGLE } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SIGNUP_EMAIL:
      return action.payload || false;
    case LOGIN_EMAIL:
      return action.payload || false;
    default:
      return state;
  }
}
