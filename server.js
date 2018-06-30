import express from 'express';
import path from 'path';
import  bodyParser from 'body-parser';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Header} from './app/components/header.jsx';
import {Footer} from './app/components/footer.jsx';
import {Data} from './public/data.js';


const port = process.env.PORT || 8080;
const server = express();

server.use(bodyParser.json());
server.use(express.static('./public'));

server.get("/home",(req,res) => {
	res.write(renderToString(<Header/>));
	setTimeout(() => {
		res.write(renderToString(<Footer />));
		res.end();
	},5000);
});

server.listen(port,()=>{
	console.log("express server is listing on configured port "+port);
});