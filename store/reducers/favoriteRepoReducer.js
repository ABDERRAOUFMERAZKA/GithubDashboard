import {
  GET_FAVORITE_REPO,
  TOGGLE_FAVORITE_REPO,
  CLEAR_ALL_FAVORITE_REPO,
} from '../actions/constants';

export const favoriteRepoReducer = (favoriteRepo = [], action) => {
  switch (action.type) {
    case GET_FAVORITE_REPO:
    case TOGGLE_FAVORITE_REPO:
    case CLEAR_ALL_FAVORITE_REPO:
      return action.payload.favoriteRepo;
    default:
      return favoriteRepo;
  }
};
