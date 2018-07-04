import React from 'react';

export class Footer extends React.Component {

    constructor() {
        super();
    }

    sleep(milliseconds) {
        var arr = [];
        for (var i = 0; i < 166666; i++) {
            arr.push("<li>'Please chal ja'</li>");
        }
        return arr;
      }


    render() {
        return(
            <footer>
                <div style={{display: 'none'}}>
                    {this.sleep(3000)}
                </div>
                <h2>End of chunked App</h2>
                <a href="/">Home</a>
            </footer>
        );
    }
}