import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
//import my components/containers here
import BookmarkCard from './Card/BookmarkCard';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BookmarkCard
                    title="Redux state management"
                    caption="How to manage state in redux"
                    description="blah"
                />
            </div>
        )
    }
};

export default App;