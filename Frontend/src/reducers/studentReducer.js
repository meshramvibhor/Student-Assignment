import { getAllStudent, editStudent  } from "../actions";

const initialState = {
  student: {
    name: "",
    age: null,
    id: null,
    address: "",
  },
  allStudents: [{}],
};

const host = "http://localhost:5000";


//helper functions to perform reducers operations

export const getAllStudents = (state) => {
  return async (dispatch) => {
    const data = await fetch(`${host}/api/student`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await data.json();
    console.log(response);
    if (response.success) {
      dispatch(getAllStudent(response.result))
    }
  };
};

 export const createStudent = (creds)=>{
  return async (dispatch)=>{
    const data = await fetch(`${host}/api/student`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({...creds})
    }); 

    const response = await data.json()
    console.log(response)
  }
}

export const deleteAll = () =>{
  return async (dispatch)=>{
    const data = await fetch(`${host}/api/student`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    }); 

    const response = await data.json()
    console.log(response)
  }
}

export const searchStudent = (keyword)=>{
  return async (dispatch)=>{
    console.log(`${host}/api/student??name=${keyword}`)
    const data = await fetch(`${host}/api/student?name=${keyword}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }); 

    const response = await data.json()
    console.log(response)
    if (response.success) {
      dispatch(getAllStudent(response.result))
    }
  }
}

export const deleteOne = (id) =>{
  return async (dispatch)=>{
    const data = await fetch(`${host}/api/student/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    }); 

    const response = await data.json()
    console.log(response)
  }
}

export const updateStudent = (creds)=>{
  return async (dispatch)=>{
    const data = await fetch(`${host}/api/student/${creds.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({...creds})
    }); 

    const response = await data.json()
    console.log(response)
  }
}



// reducer functions
const studentsRed = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL":
      console.log("reducers ", state);
      return {...state, allStudents:action.payload}

      case "EDIT_ONE" :
        return {...state, student:action.payload}

      case "SET_STUDENT":
        console.log("set stud reducer", action.payload)
        return{...state, student:action.payload}

    default:
      return state;
  }

  
};

export default studentsRed;
