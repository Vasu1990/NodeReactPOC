import React from 'react';

export class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <ul>
                {this.props.data.map((itm,idx) => <li key={idx}>{itm}</li>)}
            </ul>
        );
    }
}