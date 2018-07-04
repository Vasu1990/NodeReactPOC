import React from 'react';



export class MainContent extends React.Component {

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
            <React.Fragment>
                <div style={{display: 'none'}}>
                    {this.sleep(3000)}
                </div>
                <ul>
                    {this.props.data.map((itm,idx) => <li key={idx}>{itm}</li>)}
                </ul>
            </React.Fragment>
        );
    }
}