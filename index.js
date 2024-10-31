var fs = require('fs');
const tls = require('tls');
const https = require('https');
const cors = require("cors");

const express = require('express');
const app = express();
app.use(cors())
app.use(express.static('build'))


https.createServer({
    cert: fs.readFileSync('certificates/server.crt'),
    key: fs.readFileSync('certificates/server.key')
}, app).listen(3000, function() {
	console.log("Servidor activo con https");
});

