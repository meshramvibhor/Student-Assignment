import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllStudents,
  deleteAll,
  searchStudent,
} from "./reducers/studentReducer";

const Header = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const getAllFn = (e) => {
    console.log("gwt all", e);
    dispatch(getAllStudents());
  };

  const studentSearch = (e) => {
    console.log(keyword);
    dispatch(searchStudent(keyword));
  };

  const deleteAllFn = (e) => {
    dispatch(deleteAll());
  };

  const searchOnchange = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };

  return (
    <div
      class="d-flex flex-row mb-3 mt-5 justify-content-center"
      style={{ border: "2px solid grey", width: "70%", margin: "auto" }}
    >
      <Link to="/create">
        <button type="button" class="btn btn-outline-dark m-3">
          Create Student
        </button>
      </Link>
      <Link to="/getAll">
        <button
          onClick={getAllFn}
          type="button"
          class="btn btn-outline-dark m-3"
        >
          Get All Students
        </button>
      </Link>
      <Link to="/deleteAll">
        <button
          onClick={deleteAllFn}
          type="button"
          class="btn btn-outline-dark m-3"
        >
          Delete All Students
        </button>
      </Link>
      <div
        class="d-flex flex-row bd-highlight ml-5"
        style={{ marginLeft: "3rem" }}
      >
        <input
          onChange={searchOnchange}
          type="text"
          placeholder="Search For Students"
          className="mr-0"
          style={{ height: "2.2rem", margin: "auto" }}
        />
        <Link to="/search">
          <button
            class="btn btn-outline-dark m-3 ml-0"
            type="submit"
            onClick={studentSearch}
          >
            Search Student
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
