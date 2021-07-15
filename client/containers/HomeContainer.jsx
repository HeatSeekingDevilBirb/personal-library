/********************************************\
 * HomeContainer.jsx
 * 
 * React component that will contain the main 
 * page elements and stateful behavior
 * 
\********************************************/
import React, { Component } from 'react';
import { connect } from 'react-redux';          // required for mapStateToProps / mapDispatchToProps
import * as actions from '../actions/actions';  // import actions from action creators file
import { Switch, Route } from 'react-router';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import SignInUpContainer from './SignInUpContainer';
/**
 * import child react components/containers here
 * template:
 * import <ComponentName> from '<relative path>';
 */
import Button from '@material-ui/core/Button';  // required for access to material-ui components
import BookmarkCardsContainer from './BookmarkCardsContainer';

// flag to toggle debug logs
const DEBUG = true;

/**
 * map application state values to local component properties.
 * REM to add mapStateToProps to export at bottom of page!!
 * @param {object} state current application state served by Redux store
 * @returns {object} 
 */
const mapStateToProps = state => {
    
  const { user } = state;

  // if (DEBUG) console.log('TestContainer: mapStateToProps: testBool: ', test.testPropBool);
  // if (DEBUG) console.log('TestContainer: mapStateToProps: testString: ', test.testPropString);

  return {
    userId: user.userId,
    userName: user.userName,
  };
};

/**
 * map action dispatch to local properties as callback functions
 * REM to add mapDispatchToProps to export at bottom of page!!
 */
const mapDispatchToProps = (dispatch) => {
  // create functions that will dispatch action creators
  return {
    switchUser: (newUserId) => {
      if (DEBUG) console.log(`HomeContainer: mapDispatchToProps: switchUser: ${newUserId}`);
      dispatch(actions.switchUser_ActionCreator(newUserId));
    },
    getCurrentUser: () => {
      if (DEBUG) console.log(`HomeContainer: mapDispatchToProps: getCurrentUser: `);
      dispatch(actions.getCurrentUser_ActionCreator());
    },
    updateAllCategories: (categoriesList) => {
      if (DEBUG) console.log(`HomeContainer: mapDispatchToProps: updateAllCategories:`);
      if (DEBUG) console.log(categoriesList)

      dispatch(actions.updateAllCategories_ActionCreator(categoriesList));
    },
    updateBookmarksByCategory: (categoriesList) => {
      if (DEBUG) console.log(`HomeContainer: mapDispatchToProps: updateBookmarksByCategory:`);
      if (DEBUG) console.log(bookmarksList)

      dispatch(actions.updateBookmarksByCategory_ActionCreator(bookmarksList));
    },
  }
};

class HomeContainer extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){

    // prove that we can switch users in state
    // this.props.switchUser(2);


    fetch('/api/allcategories/')
      .then(response => response.json())
      .then(data => {

        // console.log(`HomeContainer: componentDidMount: fetch('/api/allcategories/') data:`)
        // console.log(data)

        this.props.updateAllCategories(data);
      
      })
      .catch(error => {
        console.log(error.log);
      });

      console.log(`HomeContainer: componentDidMount: this.props.userId: ${this.props.userId}`)

      fetch(`/api/bookmarks/${this.props.userId}/1`)
        .then(response => response.json())
        .then(data => {

        // console.log(`HomeContainer: componentDidMount: fetch('/api/allcategories/') data:`)
        // console.log(data)

        this.props.updateBookmarksByCategory(data);
      
      })
      .catch(error => {
        console.log(error.log);
      });



    // const myHeaders = new Headers();
    // myHeaders.append("Access-Control-Allow-Origin", true);
    // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    // const urlencoded = new URLSearchParams();
    // urlencoded.append("user_id", "1");

    // const requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   //body: urlencoded,
    //   redirect: 'follow'
    // };

    // fetch("http://localhost:3000/api/categories", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
        
  }

  render(){

    // return elements to be added to the DOM
    return(
      <div className="homeContainer">
        <div className='outerBox'>
          <Switch>
          <Route exact path='/login' component={()=> <Login/>}/>
        </Switch>
        <Switch>
             <Route exact path='/signup' component={()=> <SignUp/>}/>
           </Switch>
           <Switch>
             <Route exact path='/signinup' component={()=> <SignInUpContainer/>}/>
           </Switch>
     
        
        <Switch>
          <Route exact path='/' component={() => <BookmarkCardsContainer/>}/>
           </Switch>
           
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);