const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'duerrn16',
    database: 'films'
});

connection.connect(err => {
    if (err) {
        console.log(err);
        return err;
    }
});
app.use(cors());
