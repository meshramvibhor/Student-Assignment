const express = require("express");
const {
  getAllStudents,
  createStudent,
  deleteAllStudents,
  getStudentDetails,
  updateStudent,
  deleteStudent,
} = require("../controller/studentController");

const router = express.Router(getAllStudents);

//routes
router
  .route("/")
  .get(getAllStudents)
  .post(createStudent)
  .delete(deleteAllStudents);

router
  .route("/:id")
  .get(getStudentDetails)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;
