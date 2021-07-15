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
export const getAllBookmarks_ActionCreator = () => (dispatch) => {
  console.log('getAllBookmarks');

  fetch('api/bookmarks/1/1') // request
    .then((response) => response.json())
    .then((response) => {
      console.log('get all categries api call', response);
      dispatch({ type: types_enum.GET_ALL_BOOKMARKS, payload: response });
    })
    .catch(console.error);
};

export const addBookmark = (formData) => {
  let feedBack;
  console.log('formData from addBookmark', formData); //form data
  //formdata = { title, url, thumbnail, caption, category_id, user_id}
  return (dispatch) => {
    return fetch('api/bookmarks', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        feedBack = response;
        console.log('feedBack', feedBack);
        console.log('response', response);
      })
      .then(() => getAllBookmarks_ActionCreator())
      .catch((err) => console.log('error from addBookmark', err));
  };
};

export const deleteBookmark = (formData) => {
  let deletedBookmark;
  console.log('formData from delete bookmark', formData);
  //  formData = {bookmark_id}

  return (dispatch) => {
    return fetch('api/bookmarks', {
      method: 'DELETE',
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        deletedBookmark = response;
        console.log('deletedBookmark', deletedBookmark);
      })
      .then(() => getAllBookmarks_ActionCreator())
      .catch((err) => console.log('error from deleteBookmark', err));
  };
};

export const editBookmark = (formData) => {
  let editedbookmark;
  console.log('formData from edit Bookmark', formData); //form data
  //formData = { title, url, thumbnail, caption, category_id, user_id, bookmark_id};
  return fetch('api/bookmarks', {
    method: 'PATCH',
    body: formData,
  })
    .then((response) => response.json())
    .then((response) => {
      editedbookmark = response;
      console.log('editedbookmark', editedbookmark);
    })
    .then(() => getAllBookmarks_ActionCreator())
    .catch((err) => console.log('error from editBookmark', err));
};

export const updateBookmarksByCategory_ActionCreator = (bookmarkList) => ({
  type: types_enum.UPDATE_BOOKMARKS_BY_CATEGORY,
  payload: bookmarkList,
});
