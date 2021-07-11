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

// FUTURE ACTIONS HERE ...