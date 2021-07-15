/********************************************\
 * categoriesReducer.js
 * 
 * Redux reducer used for updating state of
 * categories-related data 
 * 
\********************************************/

// import the list of constant action names
import { ContactsOutlined } from '@material-ui/icons';
import * as types_enum from '../constants/actionTypes.js';

// setup initial state for this reducer
const initialState = {
  allCategories: [],
};

// declare the reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types_enum.UPDATE_ALL_CATEGORIES:
      // logic to get all bookmarks for the current user
      //console.log(`categoriesReducer: UPDATE_ALL_CATEGORIES:`);
      //console.log(action.payload);

      return {
        ...state,
        allCategories: action.payload,
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
export default categoriesReducer;
