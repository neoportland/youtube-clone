/* eslint-disable no-unused-vars */
 import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import { useState } from 'react'


function App() {

   const [sidebar, setSidebar] = useState(true)

  return (
   <div>
  
  <Navbar setSidebar={setSidebar}  />
    <Routes>
      <Route path='/' element={<Home sidebar={sidebar} />}  />
      <Route path='/video/:categoryID/:videoId' element={<Video/>} /> 

    </Routes>
    
   </div>
  )
}

export default App
