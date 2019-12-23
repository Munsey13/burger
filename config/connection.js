require("dotenv").config();

const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.USER_ID,
    password: process.env.PW_ID,
    database: "burgers_db"
});
connection.connect(function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Is connected!");
});