import React, { Fragment } from "react";
import {Header} from './header'
import {MainContent} from './mainContent';
import {Footer} from './footer';
import {Data} from '../data';

class App extends React.Component {
	render() {
		return <Fragment>
			<Header />
			<MainContent data={Data.getData()} />
			<Footer />
		</Fragment> 
	}
}
export default App;