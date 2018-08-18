// Requires
const express = require('express');
const io = require('socket.io');

// Variables
const app = express();
const http = require('http').Server(app);

// Startup the server
http.listen(3000, () => console.log('Listening on port 3000'));

