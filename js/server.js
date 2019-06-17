var express = require('express');
var bodyParser = require('body-parser')
var WebSocketServer = require('websocket').server;

var server = express();

server.use( express.static( 'www' ) );

server.use( bodyParser.json() );

server.post('/update', ( req, res ) => {
    
    console.log( req.body );
    
})

server.listen( process.env.PORT, process.env.IP, () => console.log('👍🏻') );