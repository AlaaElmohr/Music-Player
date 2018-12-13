import axios from 'axios';
import { LOGIN_GOOGLE, LOGIN_EMAIL,SIGNUP_EMAIL} from './types';

export const signupWithEmail = user => async dispatch => {
  const res = await axios.post('/api/auth/signup', user);
  console.log("res"+res);
  dispatch({ type: SIGNUP_EMAIL, payload: res.data});
};
export const loginWithEmail = user => async dispatch => {
  const res = await axios.post('/api/auth/login', user);
  console.log("res"+res);
  dispatch({ type: LOGIN_EMAIL, payload: res.data});
};
