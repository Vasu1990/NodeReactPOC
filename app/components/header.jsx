import React from 'react';

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <header>
                <h1>
                    Welcome to Chuked Application
                </h1>
                <div>
                    Authors : Best buddies.
                </div>
            </header>
        );
    }
}