/********************************************\
 * testReducer.js
 * 
 * Redux reducer used for early testing of
 * stateful behavior 
 * 
\********************************************/

// import the list of constant action names
import * as types_enum from '../constants/actionTypes.js';

// setup initial state for this reducer
const initialState = {
  testPropBool: false,
  testPropString: 'init string',
};

// declare the reducer
const testReducer = (state = initialState, action) => {
    
  switch (action.type) {
  case types_enum.UPDATE_TEST_BOOL:
    
    return {
      ...state,
      testPropBool: !state.testPropBool,
    };

  case types_enum.UPDATE_TEST_STRING:
  
    return {
      ...state,
      testPropString: action.payload,
    };

  default: {
    return state;
  }
  }
};

/**
 * export this reducer to be combined with
 * other reducer state properties 
 * within combinedReducers.js
 */
export default testReducer;