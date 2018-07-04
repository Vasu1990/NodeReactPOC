import React from "react";

class Html extends React.Component {
	render() {
		return (
			<html>
				<head>
					<title>Chunked POC</title>
					<link rel="stylesheet" type="text/css" href="/style.css"/>
				</head>
				<body>
					<div id="root">{this.props.children}</div>
				</body>
				<script id="initial-data" type="text/plain" data-json={this.props.initialData}></script>
				<script src="../../bundle.js"></script>
			</html> )
	}
}
export default Html;