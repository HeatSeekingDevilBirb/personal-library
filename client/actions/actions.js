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

// UPDATE_TEST_STRING action creator
export const updateTestString_ActionCreator = (newStringVal) => ({
  type: types_enum.UPDATE_TEST_STRING,
  payload: newStringVal,
});

// ================================== //
// USERS action creators
// ---------------------------------- //
export const getCurrentUser_ActionCreator = () => ({
  type: types_enum.GET_CURRENT_USER,
  payload: null,
});

export const switchUser_ActionCreator = (userId) => ({
  type: types_enum.SWITCH_USER,
  payload: userId,
});

// ================================== //
// CATEGORIES action creators
// ---------------------------------- //
export const updateAllCategories_ActionCreator = (categories) => ({
  type: types_enum.UPDATE_ALL_CATEGORIES,
  payload: categories,
});

export const switchCategory_ActionCreator = (nextCategory) => ({
  type: types_enum.SWITCH_CATEGORY,
  payload: nextCategory,
});

// ================================== //
// BOOKMARKS action creators
// ---------------------------------- //
export const getAllBookmarks_ActionCreator = () => ({
  type: types_enum.GET_ALL_BOOKMARKS,
  payload: null,
});

export const getBookmarksByCategory_ActionCreator = (categoryId) => ({
  type: types_enum.GET_BOOKMARKS_BY_CATEGORY,
  payload: categoryId,
});
