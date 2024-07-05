/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import "./Recomended.css"
import thumbnali2 from "../../assets/thumbnail2.png"
import thumbnali3 from "../../assets/thumbnail3.png"
import thumbnali4 from "../../assets/thumbnail4.png"
import thumbnali5 from "../../assets/thumbnail5.png"
import { useState } from 'react'
import thumbnali6 from "../../assets/thumbnail6.png"
import thumbnali7 from "../../assets/thumbnail7.png"
import thumbnali8 from "../../assets/thumbnail8.png"
import thumbnali1 from "../../assets/thumbnail1.png"
import { API_KEY, valu_conventor } from '../../data'
import { Link } from 'react-router-dom'

const Recomended = ({categoryId}) => {
   const [apiData, setApiData] = useState([])
   
   const fetchData= async ()=>{
   
     const relatedVideo_url=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=12&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
     await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))

   }
 
    useEffect(()=>{
      fetchData()
    },[])
 console.log("hello son deneme çalışmaları =>Recomended sayfası  ",apiData)

return (  
       
    <div className='recommended' >  
    {apiData.map((item,index)=>{
      return (

        <Link to={`/video/${item.snippet.categoryId}/${item.id}`}  key={index} className='side-video-list' >  
        <img src={item.snippet.thumbnails.medium.url} alt="" />
         <div className="vid-info">
          <h4> {item.snippet.title}  </h4>
          <p>{item.snippet.channelTitle} </p>
          <p> {valu_conventor(item.statistics.viewCount)} </p> 
 
         </div>
     </Link> 
      )
    })}
     
   </div>
  )
}

export default Recomended