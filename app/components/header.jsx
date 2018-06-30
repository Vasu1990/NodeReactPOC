import React from 'react';
import {Data} from '../../public/data.js';

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <header>
                {/*<div style={{display:"none"}}>{Data.getJunk().join("")}</div> USE THIS CODE IN CASE OF SAFARI ONLY*/}
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