/********************************************\
 * App.jsx
 * 
 * The base (or top-level) component of our React
 * front-end
 * 
\********************************************/
import React, { Component } from 'react';

// import any child components/containers here:
import HomeContainer from '../containers/HomeContainer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* <h1>Welcome to React!</h1> */}
                <HomeContainer />
            </div>
        )
    }
};

export default App;