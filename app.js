const express = require('express');
const app = express();
var http = require('http').createServer(app);

const port = process.env.PORT || '8080';

app.use(express.static(__dirname + '/public'));

http.listen(port, () => {
    console.log('listening on *:' + port);
}); 
