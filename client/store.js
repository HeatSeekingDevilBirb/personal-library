/********************************************\
 * store.js
 * 
 * Creates the Redux state Store.
 * Brings in the combined reducers which will
 * pass objects to the store representing the 
 * desired new state values.
 * 
\********************************************/

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/combinedReducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
