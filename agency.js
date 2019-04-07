var express = require('express');
var request = require('request');
var app = express();

app.use(express.static('./public'))

app.use('/', function(req, res) {
    var url = 'http://192.168.1.111:8080' + req.url;
    req.pipe(request(url)).pipe(res);
    process.env.PORT = process.env.PORT || 8080;
});
app.listen(process.env.PORT || 8080, () => {
    console.log("开始监听" + "......");
});