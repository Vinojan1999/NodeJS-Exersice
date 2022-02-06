var http = require('http');
var exone = require('./sumavg.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`Sum Number =  ${exone.sumNum(123, 321)}` );
    res.write(`Average Number = ${exone.average(123, 321)}` );
    res.end();
}).listen(1999);