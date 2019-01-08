import {GET_FAVOURITES } from '../actions/types';
import _ from "lodash";

export default function(state = [], action) {
  //state =[...state, action.payload];
  switch (action.type) {
    case GET_FAVOURITES:
      return action.payload;
   
    default:
      return state;
  }
}
