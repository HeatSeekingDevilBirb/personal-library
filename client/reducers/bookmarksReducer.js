/********************************************\
 * bookmarksReducer.js
 * 
 * Redux reducer used for updating state of
 * bookmark-related data 
 * 
\********************************************/

// import the list of constant action names
import * as types_enum from '../constants/actionTypes.js';

// setup initial state for this reducer
const initialState = {
  bookmarks: [],
  bookmarksByCategory: [],
};

// declare the reducer
const bookmarksReducer = (state = initialState, action) => {
  let bookmarksArray;
  switch (action.type) {
    case types_enum.GET_ALL_BOOKMARKS:
      // logic to get all bookmarks for the current user
      console.log('AHHHHHHHHHAAHAHAAHAHAHAH action.payload', action.payload);

      // mockup db data here
      // const mockDb = {
      //   title: 'Fake Title',
      //   url: 'fake URL',
      //   thumbnail: 'Fake Thumbnail',
      // };
      bookmarksArray = action.payload;

      return {
        ...state,
        bookmarks: bookmarksArray,
      };

    case types_enum.UPDATE_BOOKMARKS_BY_CATEGORY:
      // logic to get all bookmarks by category for the current user

      // mockup db data here

      return {
        ...state,
        bookmarksByCategory: action.payload,
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
export default bookmarksReducer;

//[id, title, url, thumbnail, caption, category_id, user_id]
