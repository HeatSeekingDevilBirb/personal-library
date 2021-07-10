/********************************************\
 * store.js
 * 
 * Creates the Redux state Store.
 * Brings in the combined reducers which will
 * pass objects to the store representing the 
 * desired new state values.
 * 
\********************************************/

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/combinedReducers';

const store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;