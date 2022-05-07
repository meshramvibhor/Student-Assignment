const express = require("express");
const app = express();
const cors = require("cors");

// importing routes from routes
const student = require("./routes/studentRoute");

app.use(express.json());
app.use(cors());

//routes
app.use("/api/student", student);

module.exports = app;
