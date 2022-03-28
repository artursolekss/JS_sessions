const http = require('http');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})

let data;
con.connect(function(err) {
    if (err) return;
    con.query("SELECT * FROM persons", function(err, result) {
        if (err) throw err;
        data = result;
    });
});

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(JSON.stringify(data));
}).listen(8080)