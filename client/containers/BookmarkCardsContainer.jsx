/********************************************\
 * 
 * BookmarkCardsContainer.jsx
 * 
 * React component that will contain the main 
 * page elements and stateful behavior
 * 
\********************************************/
import React, { Component } from 'react';
import { connect } from 'react-redux';          // required for mapStateToProps / mapDispatchToProps
import * as actions from '../actions/actions';  // import actions from action creators file
/**
 * import child react components/containers here
 * template:
 * import <ComponentName> from '<relative path>';
 */
import Button from '@material-ui/core/Button';  // required for access to material-ui components
import BookmarkCard from '../components/BookmarkCard';

// flag to toggle debug logs
const DEBUG = true;

/**
 * map application state values to local component properties.
 * REM to add mapStateToProps to export at bottom of page!!
 * @param {object} state current application state served by Redux store
 * @returns {object} 
 */
const mapStateToProps = state => ({
  
})

// const mapStateToProps = state => {
    
//   const { test } = state;

//   // if (DEBUG) console.log('TestContainer: mapStateToProps: testBool: ', test.testPropBool);
//   // if (DEBUG) console.log('TestContainer: mapStateToProps: testString: ', test.testPropString);

//   return {
//     testBool: test.testPropBool,
//     testString: test.testPropString,
//   };
// };

/**
 * map action dispatch to local properties as callback functions
 * REM to add mapDispatchToProps to export at bottom of page!!
 */
const mapDispatchToProps = (dispatch) => {
  // create functions that will dispatch action creators
  return {
    updateTestBool: (event) => {
      if (DEBUG) console.log(`TestContainer: mapDispatchToProps: updateTestBool: ${event.target.value}`);
      dispatch(actions.updateTestBool_ActionCreator());
    },
    updateTestString: (event) => {
      if (DEBUG) console.log(`TestContainer: mapDispatchToProps: updateTestString: ${event.target.value}`);
      dispatch(actions.updateTestString_ActionCreator(event.target.value));
    },
    getAllBookMarks: () => {
      console.log("BookmarkCardsContainer : mapdispatchtoprops: getallbookmarks")
      dispatch(actions.getAllBookmarks_ActionCreator());
    }
  }
};


class BookmarkCardsContainer extends Component {
  constructor(props){
    super(props);

  }

  render(){

    // This is where we would populate meta data queried from the database
    // into the cards for the currenly displayed category.

    // For testing purposes, we populate a list of BookmarkCard components for display
    const numCards = 25
    const bookmarkCardsCollection = [];
    for (let i = 0; i < numCards; i +=1){
      bookmarkCardsCollection.push(
        <BookmarkCard 
          title={`Bookmark ${i+1}`} 
          thumbnail={`https://picsum.photos/200/30${i}`} 
          description={`Description ${i+1}`}
          key={`card${i}`} 
          getAllBookMarks={this.props.getAllBookMarks}
        />
        
      );
    }

    // return elements to be added to the DOM
    return(
      <div className="bookmardCardsContainer">
        {bookmarkCardsCollection}
        <button onClick={this.props.getAllBookMarks}>getAllBookMarks</button>
      </div>
    );
  }
}

/**
 * export template:
 * 
 * export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
 * 
 * NOTE: replace mapping functions with null if you don't want to utilize them
 */
export default connect(null, mapDispatchToProps)(BookmarkCardsContainer);