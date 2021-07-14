/********************************************\
 * usersReducer.js
 * 
 * Redux reducer used for early testing of
 * stateful behavior 
 * 
\********************************************/

// import the list of constant action names
import * as types_enum from '../constants/actionTypes.js';

// setup initial state for this reducer
const initialState = {
  userId: 1,
  userName: 'User 1',
};

// declare the reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types_enum.GET_CURRENT_USER:
      // logic to find current user here
      const currentUser = 1;

      return {
        ...state,
        userId: currentUser,
      };

    case types_enum.SWITCH_USER:
      // get User info from database
      const newUserId = action.payload;
      const newUserName = `User ${newUserId}`;

      return {
        ...state,
        userId: newUserId,
        userName: newUserName,
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
export default usersReducer;
