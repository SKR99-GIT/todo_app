import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Alltasks from './pages/Alltasks'
import Importanttasks from './pages/Importanttasks'
import Incompletetasks from './pages/Incompletetasks'
import Completetasks from './pages/Completetasks'
import Signup from './pages/Signup'
import Login from './pages/Login'

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen p-2 relative'>
      <Router>
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
      </Router>
    </div>
  )
}

export default App
