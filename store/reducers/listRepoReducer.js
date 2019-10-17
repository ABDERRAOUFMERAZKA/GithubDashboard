import {GET_LIST_REPO, RESET_LIST_REPO} from '../actions/constants';

export const listRepoReducer = (listRepo = [], action) => {
  switch (action.type) {
    case GET_LIST_REPO:
    case RESET_LIST_REPO:
      return action.payload.listRepo;
    default:
      return listRepo;
  }
};
