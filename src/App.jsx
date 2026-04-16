import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Project from './Pages/Project'
import Navbar from './Navigation/Navbar'
const App = () => {




  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Agence' element={<Agence/>}/>
       <Route path='/Project' element={<Project/>}/>
    </Routes>
    </>
  )
}

export default App