var formidable = require('formidable'),
    http = require('http'),
    fs = require('fs');
 
    http.createServer(function (req, res) {
        if (req.url == '/fileupload') {
          var form = new formidable.IncomingForm();
          form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = '/home/tharusank23/Desktop/NodeJS' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
            res.write('Successfully file uploaded !');
            res.end();
          });
        });

        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
          res.write('<input type="file" name="filetoupload"><br><br><br>');
          res.write('<input type="submit">');
          res.write('</form>');
          return res.end();
        }
      }).listen(7070);


/*

var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
 
http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();
 
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
 
    return;
  }
 
  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(8080);

*/