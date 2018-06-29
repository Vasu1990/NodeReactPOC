const React = require('react');

export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <React.Fragment>
                <footer>
                    <ul>
                        {this.propa.data.map(itm => <li>{itm}</li>)}
                    </ul>
                </footer>
            </React.Fragment>
        );
    }
}