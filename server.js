import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {renderToString} from 'react-dom/server';

import App from './app/components/App';
import HtmlCustom from './app/components/html';
import {Head} from './app/components/head';
import {Header} from './app/components/header';
import {MainContent} from './app/components/mainContent';
import {Footer} from './app/components/footer';

import {Data} from './app/data.js';


const port = process.env.PORT || 8080 ,
server = express() ,
data = Data.getData();

server.use(express.static('./public'));

// page to show chunked data
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


//page to show non chunked data
server.get("/nonchunked",(req,res) => {
	res.set({
		'Content-Type': 'text/html; charset=UTF-8', //This is done to overcome the issue of minimum number of bytes needed to render the DOM in firefox.
	});
	setTimeout(() => {
		res.send(`<!DOCTYPE html>
		<html>${renderToString(<Head/>)}<body>${renderToString(<Header />)}${renderToString(<MainContent data={Data.getData()} />)}${renderToString(<Footer />)}</body></html>`)
	},6000);
});


/*page to show ismorphic rendering
	ToDo:send data in chunks
*/ 
server.get("/isomorphic",(req,res) => {
	ReactDOMServer.renderToNodeStream(
	<HtmlCustom initialData={JSON.stringify(data)}>
		<App content = {data}/>
	</HtmlCustom>).pipe(res);
});

server.listen(port,()=>{
	console.log("express server is listing on configured port "+port);
});