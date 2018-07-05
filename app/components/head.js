import React from 'react';

export class Head extends React.Component {
    render() {
        return(
            <head>
                <title>CHUNKED POC</title>
                <link rel="stylesheet" type="text/css" href="/style.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.googlemap/1.5/jquery.googlemap.js"></script>
            </head>
        );
    }
}