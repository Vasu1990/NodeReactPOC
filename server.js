import express from 'express';
import path from 'path';
import  bodyParser from 'body-parser';


const port = process.env.PORT || 8080;
const server = express();

server.use(bodyParser.json());
server.use(express.static('./public'));

server.get("/",(req,res) => {
	res.sendFile("index");
});

server.listen(port,()=>{
	console.log("express server is listing on configured port "+port);
});