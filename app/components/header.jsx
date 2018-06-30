import React from 'react';

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <React.Fragment>
                <head>
                    <title>My App</title>
                </head>
                <body>
                    <div>
                        My Buddy is
                    </div>
                </body>
            </React.Fragment>
        );
    }
}