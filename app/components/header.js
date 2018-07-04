import React from 'react';

export class Header extends React.Component {

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
            <header>
                <div style={{display: 'none'}}>
                    {this.sleep(3000)}
                </div>
                {/*<div style={{display:"none"}}>{Data.getJunk().join("")}</div> USE THIS CODE IN CASE OF SAFARI ONLY*/}
                <h1>
                    Welcome to Chuked Application
                </h1>
                <div>
                   <a  onClick={() => alert("event attached")}>Action : Click me!</a> 
                </div>
            </header>
        );
    }
}