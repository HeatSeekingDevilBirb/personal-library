/********************************************\
 * actions.js
 * 
 * A collection of exported constants
 * that name all actions available
 * to update the Redux state store.
 * 
 * These will act like an enumeration object
 * for use in action creators (actions.js) and
 * reducer switch statements.
 * 
 * By including these constants, specific and
 * consistant naming convention for actions
 * will be enforced throughout the react-redux
 * application
 * 
\********************************************/

// import actionType constants
import * as types_enum from '../constants/actionTypes';


// ================================== //
// TEST action creators
// ---------------------------------- //

// UPDATE_TEST_BOOL action creator
export const updateTestBool_ActionCreator = (newBooleanVal) => ({
  type: types_enum.UPDATE_TEST_BOOL,
  payload: newBooleanVal,
});

// ADD_TICKETING_CONTACT action creator
export const updateTestString_ActionCreator = (newStringVal) => ({
  type: types_enum.UPDATE_TEST_STRING,
  payload: newStringVal,
});

// ================================== //
// OTHER action creators...
// ---------------------------------- //

// future home of actions belonging to other reducers