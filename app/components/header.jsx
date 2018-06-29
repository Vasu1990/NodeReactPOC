const React = require('react');

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <React.Fragment>
                <head>
                    <title>My App</title>
                </head>
                <body>
                    <ul>
                        {this.props.map(itm => <li>{itm}</li>)}
                    </ul>
                </body>
            </React.Fragment>
        );
    }
}