import React from 'react';

export class Head extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <head>
                <title>My App</title>
                <link rel="stylesheet" type="text/css" href="/style.css"/>
            </head>
        );
    }
}