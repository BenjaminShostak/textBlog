const express = require("express");
const app =express();
const Sequelize = require('sequelize');

require('dotenv').config();



const mysql =require("mysql");

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "FakeDatabase",

});

