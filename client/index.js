/********************************************\
 * index.js
 * 
 * Webpack entry point.
 * 
 * This is where we wrap the React app in the
 * Redux 'Provider' component in order for Redux
 * to manage state.
 * 
 * This is also where we hang the base react
 * component (App) onto the DOM.
 * 
\********************************************/
import React from 'react'; // needed for React
import ReactDOM from 'react-dom'; // needed for React
import { BrowserRouter } from "react-router-dom"; // allows multipage behavior in React
import { Provider } from 'react-redux'; // this is the wrapper for Redux state management
import store from './store.js'; // get access to the Redux state Store
import "./styles.css"; // required for webpack to include css styles

// import components
import App from './components/App';


// A few random logs to confirm that this file is being served.
// console.log('====================');
// console.log('Hello from index.js!');

ReactDOM.render(
  // wrap the App in the Redux 'Provider' component and
  // pass in the Redux store (which we imported above)
  // REM: Provider is ther *real* top level (top secret!) component of this react-redux application
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('reactApp') // hangs the react application on the DOM at the passed-in element id
);