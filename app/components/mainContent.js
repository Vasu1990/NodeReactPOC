import React from 'react';



export class MainContent extends React.Component {
    render() {
        return(
            <ul>
                {this.props.data.map((itm,idx) => <li key={idx}>{itm}</li>)}
            </ul>
        );
    }
}