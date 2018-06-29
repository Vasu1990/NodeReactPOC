import express from 'express';
import path from 'path';
import  bodyParser from 'body-parser';
import {renderToString} from 'react-dom/server';
import {Header} from './app/components/header.jsx';
import {Footer} from './app/components/footer.jsx';
import {Data} from './public/data.js';


const port = process.env.PORT || 8080;
const server = express();

server.use(bodyParser.json());
server.use(express.static('./public'));

server.get("/home",(req,res) => {
	res.write(`
	<html>
		<head>
			<title>Vasu Nagpal</title>
		</head>
		<body> My buddy
	</html>
	`);
	setTimeout(() => {
		res.write(`
		Buddy is Cute</body></html>
		`);
		res.end();
	},5000);
});

server.listen(port,()=>{
	console.log("express server is listing on configured port "+port);
});