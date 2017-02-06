var express = require("express");
var path =require("path");
var app = express();

app.use(express.static(__dirname+ '/public'));

app.get('/message', function(req, res) {
    res.send('Hello World!')
    });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/index.html'));
    });


app.listen(3000, function() {
    console.log('helloworld app listening on port 3000!');
    });
