import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateStudent from "./components/CreateStudent";
import GetAllStudents from "./components/GetAllStudents";
import {useSelector, useDispatch} from "react-redux";

function App() {



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/create" element={<CreateStudent  mode={"create"} />} />
        <Route path="/getAll" element={<GetAllStudents />} />
        <Route path="/deleteAll" element={<div></div>}/>
        <Route path="/search" element={<GetAllStudents />}/>
        <Route path="/edit" element={<CreateStudent mode={"edit"} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
