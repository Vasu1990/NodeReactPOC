import express from 'express';
import path from 'path';
import  bodyParser from 'body-parser';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Head} from './app/components/head.jsx';
import {Header} from './app/components/header.jsx';
import {MainContent} from './app/components/mainContent.jsx';
import {Footer} from './app/components/footer.jsx';
import {Data} from './public/data.js';


const port = process.env.PORT || 8080;
const server = express();

server.use(bodyParser.json());
server.use(express.static('./public'));

server.get("/home",(req,res) => {
	res.set({
		'Content-Type': 'text/html; charset=UTF-8', //This is done to overcome the issue of minimum number of bytes needed to render the DOM in firefox.
	});
	res.write(`<!DOCTYPE html>
		<html>${renderToString(<Head/>)}<br />`);
	res.write(`<body>${renderToString(<Header />)}<br />`);
	setTimeout(() => {
		res.write(renderToString(<MainContent data={Data.getData()} />));
		res.write(`<br />`);
	},2000);
	setTimeout(() => {
		res.write(`${renderToString(<Footer />)}</body></html>`);
		res.end();
	},4000);
});

server.listen(port,()=>{
	console.log("express server is listing on configured port "+port);
});