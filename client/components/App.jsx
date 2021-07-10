import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
//import my components/containers here

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button>
                    Name
                </Button>
                <h1>Welcome to React!</h1>
            </div>
        )
    }
};

export default App;