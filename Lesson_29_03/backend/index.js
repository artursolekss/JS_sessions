const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
let mysql = require("mysql");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})

connection.connect((error) => {
    if (error)
        throw error;
    console.log("Connected to MYSQl")
})

app.post("/add-name", (req, res) => {
    let sql = "INSERT INTO names (name,lastname) VALUES (?,?)";
    connection.query(sql, [req.body.name, req.body.lastname], (error, results) => {
        if (error) throw error;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    })
})

app.get("/get-names", (req, res) => {
    let sql = "SELECT * FROM names";
    connection.query(sql, (error, results) => {
        if (error) throw error;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    })
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})