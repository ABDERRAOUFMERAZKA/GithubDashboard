import {TOGGLE_LOADING} from '../actions/constants';

export const loadingReducer = (loading = false, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return action.payload.loading;
    default:
      return loading;
  }
};
