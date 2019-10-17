import {GET_STATUS_CODE} from '../actions/constants';

export const statusCodeReducer = (statusCode = null, action) => {
  switch (action.type) {
    case GET_STATUS_CODE:
      return action.payload.statusCode;
    default:
      return statusCode;
  }
};
