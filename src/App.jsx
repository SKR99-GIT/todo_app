import React, { useEffect } from "react";
import Home from "./pages/Home";
import Alltasks from './pages/Alltasks'
import Importanttasks from './pages/Importanttasks'
import Incompletetasks from './pages/Incompletetasks'
import Completetasks from './pages/Completetasks'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";

const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem("id") && localStorage.getItem("token")){
      dispatch(authActions.login());
    }else if (isLoggedIn === false) {
      navigate("/login")
    }
  }, [])
  return (
    <div className='bg-gray-900 text-white h-screen p-2 relative'>
        <Routes>
          <Route exact path='/' element={<Home/>}>
            <Route index element={<Alltasks/>} />
            <Route path='/importanttasks' element={<Importanttasks/>} />
            <Route path='/incompletetasks' element={<Incompletetasks/>} />
            <Route path='/completetasks' element={<Completetasks/>} />
          </Route>{/* exact -->  starting path */}
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default App
