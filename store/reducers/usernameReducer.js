import {SET_USERNAME} from '../actions/constants';

export const usernameReducer = (username = '', action) => {
  switch (action.type) {
    case SET_USERNAME:
      return action.payload.username;
    default:
      return username;
  }
};
