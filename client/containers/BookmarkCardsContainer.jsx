/********************************************\
 * 
 * BookmarkCardsContainer.jsx
 * 
 * React component that will contain the main 
 * page elements and stateful behavior
 * 
\********************************************/
import React, { Component } from 'react';
import { connect } from 'react-redux'; // required for mapStateToProps / mapDispatchToProps
import * as actions from '../actions/actions'; // import actions from action creators file
/**
 * import child react components/containers here
 * template:
 * import <ComponentName> from '<relative path>';
 */
import Button from '@material-ui/core/Button'; // required for access to material-ui components
import BookmarkCard from '../components/BookmarkCard';

// flag to toggle debug logs
const DEBUG = true;

/**
 * map application state values to local component properties.
 * REM to add mapStateToProps to export at bottom of page!!
 * @param {object} state current application state served by Redux store
 * @returns {object}
 */

const mapStateToProps = (state) => ({
  bookmarkList: state.bookmarks.bookmarks,
});

const mapDispatchToProps = (dispatch) => ({
  getAllBookmarks: () => dispatch(actions.getAllBookmarks_ActionCreator()),
  deleteBookmark: (e) => dispatch(actions.deleteBookmark(e)),
  editBookmark: (e) => dispatch(actions.editBookmark(e)),
});

/**
 * map action dispatch to local properties as callback functions
 * REM to add mapDispatchToProps to export at bottom of page!!
 */
// const mapDispatchToProps = (dispatch) => {
//   // create functions that will dispatch action creators
//   return {
//     updateTestBool: (event) => {
//       if (DEBUG)
//         console.log(`TestContainer: mapDispatchToProps: updateTestBool: ${event.target.value}`);
//       dispatch(actions.updateTestBool_ActionCreator());
//     },
//     updateTestString: (event) => {
//       if (DEBUG)
//         console.log(`TestContainer: mapDispatchToProps: updateTestString: ${event.target.value}`);
//       dispatch(actions.updateTestString_ActionCreator(event.target.value));
//     },
//   };
// };

class BookmarkCardsContainer extends Component {
  constructor(props) {
    super(props);
  }

  //componentWilLMount has been deprecated - need to change
  componentDidMount() {
    this.props.getAllBookmarks();
  }

  render() {
    const bookmarkList = this.props.bookmarkList;
    const getAllBookmarks = this.props.getAllBookmarks;
    const deleteBookmark = this.props.deleteBookmark;
    const editBookmark = this.props.editBookmark;

    if (!bookmarkList.length)
      return (
        <div>
          <h1>Loading data, please wait...</h1>
        </div>
      );
    // This is where we would populate meta data queried from the database
    // into the cards for the currenly displayed category.
    //map over bookmarkList and pass in props
    else {
      const bookmarkCardsCollection = bookmarkList.map((bookmark) => {
        return (
          <BookmarkCard
            title={bookmark.title}
            bookMark={bookmark}
            deleteBookmark={this.props.deleteBookmark}
            editBookmark={this.props.editBookmark}
          />
        );
      });
      console.log('bookmarkCardsCollection', bookmarkCardsCollection);

      // return elements to be added to the DOM
      return (
        <div className="bookmarkCardsContainer">
          <Button onClick={getAllBookmarks}>Load All Bookmarks</Button>
          {bookmarkCardsCollection}
        </div>
      );
    }
  }
}

/**
 * export template:
 *
 * export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
 *
 * NOTE: replace mapping functions with null if you don't want to utilize them
 */
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkCardsContainer);
