import {combineReducers} from 'redux';
import {listRepoReducer} from './listRepoReducer';
import {favoriteRepoReducer} from './favoriteRepoReducer';
import {loadingReducer} from './loadingReducer';
import {usernameReducer} from './usernameReducer';
import {statusCodeReducer} from './getStatusCode';

export const reducers = combineReducers({
  listRepo: listRepoReducer,
  statusCode: statusCodeReducer,
  favoriteRepo: favoriteRepoReducer,
  loading: loadingReducer,
  username: usernameReducer,
});
