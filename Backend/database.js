const mysql = require("mysql");


var mySqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "students",
    multipleStatements: true,
  });
  
  mySqlConnection.connect((err) => {
    if (!err) {
      console.log("connected to database");
    } else {
      console.log("can't connect to databse");
    }
  });

  module.exports = mySqlConnection