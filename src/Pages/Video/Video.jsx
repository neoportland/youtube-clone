/* eslint-disable no-unused-vars */
// import React from 'react'


import { useParams } from "react-router-dom"
import PlayVideo from "../../Components/PlayVideo/PlayVideo"
import Recomended from "../../Components/Recomends/Recomended"
import "./Video.css"

const Video = () => {
  const {videoId, categoryId}=useParams() // şimdi ben bir videoya tıkladığımda videoıd ve categoriy id değerleri otomatik olarak linkin sonuna ekleniyor. ok. ve ben bunları usePrams ile yakalayabiliyorum. ok 

   console.log("merhaba buarsı videoid",videoId)
   console.log("merhaba buarsı categoryiıd",categoryId)
 


  return (
       <div className="play-container" >  

    <PlayVideo videoId={videoId}  />
    <Recomended categoryId ={categoryId}/> 
      
       </div>
  )
}

export default Video 