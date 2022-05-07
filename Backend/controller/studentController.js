const mySqlConnection = require("../database");

exports.getAllStudents = async (req, res) => {
  try {
    if (!req.query.name) {
      mySqlConnection.query(
        "SELECT * from studentinfo",
        (err, rows, fields) => {
          if (!err) {
            res.status(200).json({
              success: true,
              result: rows,
            });
          } else {
            res.status(400).json({
              success: false,
              error: err,
            });
          }
        }
      );
    } else {
      const keyword = req.query.name;
      mySqlConnection.query(
        `SELECT * FROM studentinfo WHERE name LIKE '%${keyword}%'`,
        (err, rows) => {
          if (!err) {
            res.status(200).json({
              success: true,
              result: rows,
            });
          } else {
            res.status(400).json({
              success: false,
              error: err,
            });
          }
        }
      );
    }
  } catch (error) {
    console.error(error.msg);
    res.status(500).send("Internal error occured");
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { name, age, id, address } = req.body;

    mySqlConnection.query(
      `INSERT INTO studentinfo VALUES ('${name}', '${age}', '${id}', '${address}')`,
      (err) => {
        if (!err) {
          res.status(200).json({
            success: true,
            message: "Entry created successfully",
          });
        } else {
          res.status(400).json({
            success: false,
            error: err,
          });
        }
      }
    );
  } catch (error) {
    console.error(error.msg);
    res.status(500).send("Internal error occured");
  }
};

exports.deleteAllStudents = async (req, res) => {
  try {
    mySqlConnection.query("DELETE FROM studentinfo", (err) => {
      if (!err) {
        res.status(200).json({
          success: true,
          result: "AlL records deleted successfullly",
        });
      } else {
        res.status(400).json({
          success: false,
          error: err,
        });
      }
    });
  } catch (error) {
    console.error(error.msg);
    res.status(500).send("Internal error occured");
  }
};

exports.getStudentDetails = async (req, res) => {
  try {
    const id = req.params.id;

    mySqlConnection.query(
      `SELECT * FROM studentinfo WHERE id ='${id}'`,
      (err, rows) => {
        if (!err) {
          res.status(200).json({
            success: true,
            result: rows,
          });
        } else {
          res.status(400).json({
            success: false,
            error: err,
          });
        }
      }
    );
  } catch (error) {
    console.error(error.msg);
    res.status(500).send("Internal error occured");
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, age, address } = req.body;

    mySqlConnection.query(
      `UPDATE studentinfo SET name = '${name}', age = '${age}', address='${address}' WHERE id = ${id}`,
      (err, rows) => {
        if (!err) {
          res.status(200).json({
            success: true,
            result: "row updated successfully",
          });
        } else {
          res.status(400).json({
            success: false,
            error: err,
          });
        }
      }
    );
  } catch (error) {
    console.error(error.msg);
    res.status(500).send("Internal error occured");
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    mySqlConnection.query(`DELETE FROM studentinfo WHERE id=${id}`, (err) => {
      if (!err) {
        res.status(200).json({
          success: true,
          result: "Entry deleted successfully",
        });
      } else {
        res.status(400).json({
          success: false,
          error: err,
        });
      }
    });
  } catch (error) {
    console.error(error.msg);
    res.status(500).send("Internal error occured");
  }
};
