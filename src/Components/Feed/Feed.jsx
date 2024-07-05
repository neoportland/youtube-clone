/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import "./Feed.css"
import React, { useEffect, useState } from 'react'
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import moment from "moment"
import { Link } from "react-router-dom"
import { API_KEY } from "../../data"
import axios from "axios"
import { valu_conventor } from "../../data"

const Feed = ({category}) => {
      const [data, setData] = useState([])


  const fetchData =async ()=>{
    const videList_url=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    await fetch(videList_url).then((response)=>response.json()).then(data=>setData(data.items))
  }
  // const fetchData= async()=>{
  //   await axios.get( ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`).then((response)=>setData(response.data.items))
  // }

  useEffect(()=>{
    fetchData()

  },[category]) 
  console.log("son data bükücü :",data) 

 



  return (
    <div className="feed"  >
      {
        data&&data.map(( item, index)=>{
          return (
        
            <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2> {item.snippet.title}  </h2>
            <h3>{item.snippet.channelTitle} </h3>
            <p> { valu_conventor(item.statistics.viewCount)} views &bull; { moment(item.snippet.publishedAt).fromNow() }  </p>
          </Link> 
          )


        })
      }

         

        
         
     
       {/*  */}
      


    </div>
  )
} 

export default Feed