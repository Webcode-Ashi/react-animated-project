import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Project from './Pages/Project'
import Navbar from './Navigation/Navbar'
import Fullscreennav from './Navigation/Fullscreen'
const App = () => {




  return (
    <>
    <Navbar/>
    <Fullscreennav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Agence' element={<Agence/>}/>
       <Route path='/Project' element={<Project/>}/>
    </Routes>
    </>
  )
}

export default App