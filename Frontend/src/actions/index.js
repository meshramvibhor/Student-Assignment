export const createStudent = () =>{
    return{
        type:"CREATE"
    }
}

export const getAllStudent = (payload) =>{
    console.log("actions ")
    return{
        type:"GET_ALL",
        payload:payload
    }
}

export const getOneStudent = () =>{
    return{
        type:"GET_ONE"
    }
}

export const editStudent = (payload) =>{
    return{
        type:"EDIT_ONE",
        payload:payload
    }
}

export const setStudent = (payload) =>{
    return{
        type:"SET_STUDENT",
        payload:payload
    } 
}