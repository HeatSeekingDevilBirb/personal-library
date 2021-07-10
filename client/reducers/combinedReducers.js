/********************************************\
 * combinedReducers.js
 * 
 * State exported from all Redux reducers are
 * gathered here and combined into a single
 * representation of state that is then exported
 * for import into the Redux state Store.
 * 
\********************************************/
import { combineReducers } from 'redux';

// import ALL reducers here:
import testReducer from './testReducer';

/**
 * Gather properties from each reducer and
 * add them to state --
 * creating one bucket (property) in state
 * for each reducer.
 * 
 * Resulting structure:
 * state.bucketName.propertiesAddedByReducer
 */
const reducers = combineReducers({
  test: testReducer,
});

/**
 * Export the combined reducers.
 * This will be imported by the Redux Store (store.js)
 */
export default reducers;