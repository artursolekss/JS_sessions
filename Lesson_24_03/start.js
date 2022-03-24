const http = require('http');
const mysql = require('mysql');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end('<h1>Hello All</h1>');
    // const urlpath = url.parse(req.url, true);
    // const filename = '.' + urlpath.pathname;
    // fs.readFile(filename, function(error, data) {
    //     if (error) {
    //         res.writeHead(404, { 'Content-Type': 'text/html' });
    //         return res.end('Page not found :(');
    //     }
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     res.end();
    // })
    // const con = mysql.createConnection({
    //     host: "localhost",
    //     user: "root",
    //     password: ""
    // })
    // con.connect(function(err) {

    //     if (err) {
    //         res.writeHead(404, { 'Content-Type': 'text/html' });
    //         res.end('Connection is not successful :(');
    //     }
    // })

}).listen(80);