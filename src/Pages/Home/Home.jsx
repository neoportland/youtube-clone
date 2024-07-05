/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

import Feed from "../../Components/Feed/Feed"
import SideBar from "../../Components/SideBar/SideBar"
import { useState } from "react"
import { useParams } from "react-router-dom"

const Home = ({sidebar}) => {
  const [category, setCategory] = useState(0)


  return (
    <div>

        <SideBar sidebar={sidebar}  category={category} setCategory={setCategory} /> 
        <div className={`container ${sidebar?"":"large-container"}`}>
          
          <Feed category={category} />


         </div>
       

    </div>
  )
}

export default Home