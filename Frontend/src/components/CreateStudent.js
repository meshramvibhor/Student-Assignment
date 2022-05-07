import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStudent, updateStudent } from "../reducers/studentReducer";

const CreateStudent = (props) => {
  console.log("mode =", props.mode);
  const dispatch = useDispatch();
  const studState = useSelector((state) => state.studentsRed);
  const [mode, setMode] = useState({ create: false, edit: false });
  //   console.log("create student", studState);

  const [credentials, setCredentials] = useState({
    name: studState.student.name,
    age: studState.student.age,
    id: studState.student.id,
    address: studState.student.address,
  });

  const handleOnChange = (e) => {
    // console.log(e.target.value);
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    // console.log(e);
    e.preventDefault();

    if (props.mode == "create") {
      dispatch(createStudent(credentials));
    }
    else{
        console.log(e.target.id)
        dispatch(updateStudent(credentials))
    }

    setCredentials({
      name: "",
      age: "",
      id: "",
      address: "",
    });
    // console.log(credentials);
  };

  return (
    <div style={{ margin: "auto", width: "50%" }}>
      <form onSubmit={handleOnSubmit}>
        <h1>{props.mode == "create" ? "Enter" : "Edit"} Student Details</h1>
        <div class="form-group mb-4">
          <label class="mb-1" for="name">
            Student's Name
          </label>
          <input
            onChange={handleOnChange}
            style={{ width: "26%" }}
            type="text"
            class="form-control"
            value={props.mode=="create"?"":credentials.name}
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group  mb-4">
          <label class="mb-1" for="age">
            Student's Age
          </label>
          <input
            value={props.mode=="create"?"":credentials.age}
            onChange={handleOnChange}
            style={{ width: "18%" }}
            type="number"
            class="form-control"
            id="age"
            placeholder="Enter Age"
          />
        </div>
        {props.mode == "create" && (
          <div class="form-group mb-4">
            <label class="mb-1" for="id">
              Student's Id
            </label>
            <input
              value={props.mode=="create"?"":credentials.id}
              onChange={handleOnChange}
              style={{ width: "20%" }}
              type="text"
              class="form-control"
              id="id"
              aria-describedby="emailHelp"
              placeholder="Enter Id"
            />
          </div>
        )}
        <div class="form-group  mb-4">
          <label class="mb-1" for="address">
            Student's Address
          </label>
          <textarea
            value={props.mode=="create"?"":credentials.address}
            onChange={handleOnChange}
            class="form-control"
            id="address"
            placeholder="Enter Address"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-outline-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateStudent;
