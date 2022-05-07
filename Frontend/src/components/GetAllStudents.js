import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";
import { deleteOne, createStudent } from "../reducers/studentReducer";
import { setStudent } from "../actions";
import { Link } from "react-router-dom";

const GetAllStudents = () => {
  const dispatch = useDispatch();
  const studState = useSelector((state) => state.studentsRed);

  let num = 0;

  const editClick = (e) => {
    console.log("i am on edit click");
    studState.allStudents.map((element) => {
      console.log(element);
      if (element.id == e.target.id) {
        dispatch(setStudent(element));
      }
    });

    console.log("sample", studState.allStudents);
    console.log(e.target.id);
  };

  const delClick = (e) => {
    dispatch(deleteOne(e.target.id));
  };

  return (
    <table
      style={{ width: "70%", margin: "auto" }}
      class="table table-hover table-light"
    >
      <thead>
        <tr>
          <th scope="col">Sr No.</th>
          <th scope="col">Student's Name</th>
          <th scope="col">Student's Age</th>
          <th scope="col">Student's Id</th>
          <th scope="col">Student's Address</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {studState.allStudents.map((item) => {
          num++;
          return (
            <tr style={{ cursor: "pointer" }} id={item.id}>
              <th id={item.id} scope="row">
                {num}
              </th>
              <td id={item.id}>{item.name}</td>
              <td id={item.id}>{item.age}</td>
              <td id={item.id}>{item.id}</td>
              <td id={item.id}>{item.address}</td>
              <td id={item.id}>
                <AiOutlineDelete id={item.id} onClick={delClick} />
              </td>
              <td id={item.id}>
                <Link style={{ color: "black" }} to="/edit">
                  <AiTwotoneEdit id={item.id} onClick={editClick} />
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GetAllStudents;
