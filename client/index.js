import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

// import { Provider } from 'react-redux';
// import store from './store.js'

// import './main.css';  // ?

// import components
import App from './components/App';


// A few random logs to confirm that this file is being served.
console.log('====================');
console.log('Hello from index.js!');


// wrap the App in the Redux 'Provider' component and
// pass in the store
// REM: Provider is ther *real* top level (top secret!) component of this react-redux application
// <Provider store={store}>
// </Provider>,

ReactDOM.render(
    // <BrowserRouter>
    <App />,
    // </BrowserRouter>,
    document.getElementById('reactApp')
);

