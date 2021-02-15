
const mysql =require("mysql");


require('dotenv').config();



const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "FakeDatabase",

});

