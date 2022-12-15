const express = require('express');
const config = require('./config/config');
const cors = require('cors');
const http = require('http');
const conectarDB = require('./database/db');
const router = require('./routes/routesUsers');

conectarDB();

const {port} = config;

const app = express();
app.use(express.json({extended: true}));

app.use(cors());

app.use(router);




const server = http.createServer(app, function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});




server.listen(port, (req, res) => {
    console.log(`Servidor correndo en el puerto ${port}`);
});