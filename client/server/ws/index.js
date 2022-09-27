'use strict';

const WebSocket = require('./lib/websocket');

WebSocket.createWebSocketStream = require('./lib/stream');
WebSocket.Server = require('./lib/websocket-server');
WebSocket.Receiver = require('./lib/receiver');
WebSocket.Sender = require('./lib/sender');

WebSocket.WebSocket = WebSocket;
WebSocket.WebSocketServer = WebSocket.Server;

module.exports = WebSocket;

const wss = new WebSocket.Server({port: 3000})

wss.on("connection", ws=>{
    console.log("New client");


    WebSocket.on("close", ()=>{
        console.log("client has disconnected.");
})


})
