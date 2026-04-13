import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Project from './Pages/Project'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Agence' element={<Agence/>}/>
       <Route path='/Project' element={<Project/>}/>
    </Routes>
    </>
  )
}

export default App