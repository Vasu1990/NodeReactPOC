import express from 'express';
import path from 'path';
import  bodyParser from 'body-parser';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Head} from './app/components/head';
import {Header} from './app/components/header';
import {MainContent} from './app/components/mainContent';
import {Footer} from './app/components/footer';
import {Data} from './app/data.js';


const port = process.env.PORT || 8080;
const server = express();

server.use(bodyParser.json());
server.use(express.static('./public'));

server.get("/chunked",(req,res) => {
	res.set({
		'Content-Type': 'text/html; charset=UTF-8', //This is done to overcome the issue of minimum number of bytes needed to render the DOM in firefox.
	});
	res.write(`<!DOCTYPE html>
		<html>${renderToString(<Head/>)}`);
	res.write(`<body>${renderToString(<Header />)}`);
	setTimeout(() => {
		res.write(renderToString(<MainContent data={Data.getData()} />));
	},2000);
	setTimeout(() => {
		res.write(`${renderToString(<Footer />)}</body></html>`);
		res.end();
	},4000);
});


server.listen(port,()=>{
	console.log("express server is listing on configured port "+port);
});