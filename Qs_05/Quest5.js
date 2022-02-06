var http = require('http');
var uc = require('upper-case');

http.createServer(function (req, res) {
    res.writeHead(200, {'Contant-Type': 'text/html'});
    res.write(uc("Uki is the best place to learn programming !"));
    res.end();
}).listen(2003);