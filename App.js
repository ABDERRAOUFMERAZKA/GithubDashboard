import React from 'react';
import TabsNavigator from './navigation/TabsNavigator';
import {createStore, applyMiddleware} from 'redux';
import {reducers} from './store/reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));
const App = () => {
  return (
    <Provider store={store}>
      <TabsNavigator />
    </Provider>
  );
};

export default App;
