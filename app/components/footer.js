import React from 'react';
import Utils from '../Utils';
export class Footer extends React.Component {

    render() {
        return(
            <footer>
                <div style={{display: 'none'}}>
                    {Utils.sleep(176666)}
                </div>
                <h2>End of chunked App</h2>
                <a href="/">Home</a>
            </footer>
        );
    }
}