import {
  GET_LIST_REPO,
  RESET_LIST_REPO,
  GET_FAVORITE_REPO,
  TOGGLE_FAVORITE_REPO,
  CLEAR_ALL_FAVORITE_REPO,
  TOGGLE_LOADING,
  SET_USERNAME,
  GET_STATUS_CODE,
} from './constants';
import github from '../apis/github';
import AsyncStorage from '@react-native-community/async-storage';
// get lits of repo
export const getListRepo = username => async dispatch => {
  try {
    // show loading
    dispatch(toggleLoading(true));
    // get data
    const response = await github.get(`/users/${username}/repos`);

    if (response.data.length > 0) {
      dispatch({
        type: GET_LIST_REPO,
        payload: {
          listRepo: response.data,
        },
      });
    } else {
      dispatch({
        type: GET_STATUS_CODE,
        payload: {
            statusCode: response.status,
        },
      });
    }
    // hide loading
    dispatch(toggleLoading(false));
  } catch (error) {
    // reset list of repo
    dispatch(resetListRepo());
    // hide loading
    dispatch(toggleLoading(false));
  }
};
// reset list of repo
export const resetListRepo = () => {
  return {
    type: RESET_LIST_REPO,
    payload: {
      listRepo: [],
    },
  };
};
// get favorite repo
export const getFavoriteRepo = () => async dispatch => {
  try {
    const value = await AsyncStorage.getItem('FavoriteRepo');
    let favoriteRepo = [];
    if (value !== null) {
      favoriteRepo = await JSON.parse(value);
    } else {
      await AsyncStorage.setItem('FavoriteRepo', JSON.stringify(favoriteRepo));
    }
    dispatch({
      type: GET_FAVORITE_REPO,
      payload: {
        favoriteRepo,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
// toggle favorite repo
export const toggleFavoriteRepo = repo => async (dispatch, getState) => {
  await dispatch(getFavoriteRepo());
  const {favoriteRepo} = getState();
  const index = favoriteRepo.findIndex(e => e.id === repo.id);
  let newFavoriteRepo = [];
  if (index > -1) {
    newFavoriteRepo = favoriteRepo.filter(e => e.id !== repo.id);
  } else {
    newFavoriteRepo = [...favoriteRepo, repo];
  }
  await AsyncStorage.setItem('FavoriteRepo', JSON.stringify(newFavoriteRepo));
  dispatch({
    type: TOGGLE_FAVORITE_REPO,
    payload: {
      favoriteRepo: newFavoriteRepo,
    },
  });
};
// clear all favorites repo
export const clearAllFavoriteRepo = () => async dispatch => {
  await AsyncStorage.removeItem('FavoriteRepo');
  dispatch({
    type: CLEAR_ALL_FAVORITE_REPO,
    payload: {
      favoriteRepo: [],
    },
  });
};
// toggle loading
export const toggleLoading = loading => {
  return {
    type: TOGGLE_LOADING,
    payload: {
      loading,
    },
  };
};
// set username
export const setValueUsername = username => {
  return {
    type: SET_USERNAME,
    payload: {
      username,
    },
  };
};
