/********************************************\
 * actionTypes.js
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

/**
 * template:
 * export const ACTION_DESCRIPTION = "ACTION_DESCRIPTION";
 */

// TEST ACTIONS
export const UPDATE_TEST_BOOL = 'UPDATE_TEST_BOOL';
export const UPDATE_TEST_STRING = 'UPDATE_TEST_STRING';

// USERS ACTIONS
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SWITCH_USER = 'SWITCH_USER';

// CATEGORIES ACTIONS
export const UPDATE_ALL_CATEGORIES = 'UPDATE_ALL_CATEGORIES';
export const SWITCH_CATEGORY = 'SWITCH_CATEGORY';

// BOOKMARK ACTIONS
export const GET_ALL_BOOKMARKS = 'GET_ALL_BOOKMARKS';
export const UPDATE_BOOKMARKS_BY_CATEGORY = 'UPDATE_BOOKMARKS_BY_CATEGORY';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';
