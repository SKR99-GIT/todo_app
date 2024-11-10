import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Alltasks from './pages/Alltasks'
import Importanttasks from './pages/Importanttasks'
import Incompletetasks from './pages/Incompletetasks'
import Completetasks from './pages/Completetasks'

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen p-2'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}>
            <Route index element={<Alltasks/>} />
            <Route path='/importanttasks' element={<Importanttasks/>} />
            <Route path='/incompletetasks' element={<Incompletetasks/>} />
            <Route path='/completetasks' element={<Completetasks/>} />
          </Route>{/* exact -->  starting path */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
