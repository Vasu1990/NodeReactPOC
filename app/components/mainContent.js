import React from 'react';
import Utils from '../Utils';


export class MainContent extends React.Component {


    render() {
        return(
            <React.Fragment>
                <div style={{display: 'none'}}>
                    {Utils.sleep()}
                </div>
                <ul>
                    {this.props.data.map((itm,idx) => <li key={idx}>{itm}</li>)}
                </ul>
            </React.Fragment>
        );
    }
}