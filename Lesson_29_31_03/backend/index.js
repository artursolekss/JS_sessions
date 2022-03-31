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

app.post("/change-names", (req, res) => {
    const entrisChanged = req.body;
    let sql = "UPDATE names SET name=?,lastname=? WHERE ID=?";
    entrisChanged.map((entry) => {
        connection.query(sql, [entry.name, entry.lastname, entry.ID], (error, results) => {
            if (error) throw error;
        })
    });
    res.send(JSON.stringify({ "status": 200, "error": null, "response": {} }));
})

app.post("/delete-name", (req, res) => {
    let sql = "DELETE FROM names WHERE ID = ?";
    connection.query(sql, [req.body.id], (error, results) => {
        if (error) throw error;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    })
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})