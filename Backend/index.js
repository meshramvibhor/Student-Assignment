const mysql = require("mysql");
const express = require("express");
var cors = require("cors");
const app = require("./app");
const mySqlConnection = require("./database");



const port = 5000;


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
