/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "./PlayVideo.css"
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import share from '../../assets/share.png'
import dislike from '../../assets/dislike.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, valu_conventor } from '../../data'
import moment from 'moment'

import Recomended from '../Recomends/Recomended'
import { useParams } from 'react-router-dom'


const PlayVideo = () => {
  const {videoId} =useParams()

  const [apiData,setApiData]=useState(null)
  const [channelData,setChannelData]=useState(null)
  const [commentData,setCommentData]=useState([])

  const fetchVideoData= async ()=>{
    const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(response=>response.json()).then(data=>setApiData(data.items[0]))
  } 

  const fetchOtherData= async ()=>{
    /*channel information */
    const channelDetails_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channelDetails_url).then(response=>response.json()).then(data=>setChannelData(data.items[0]))
    /*commnet information */ 

  } 
 const fetchCommentData =async ()=>{

  const commentDetails_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
  await fetch(commentDetails_url).then(response=>response.json()).then(data=>setCommentData(data.items))
  console.log("comment list is here  :",commentData)

}
  useEffect(()=>{
    fetchVideoData()
  

  },[videoId])
  useEffect(()=>{
    
    fetchOtherData()
    fetchCommentData()

  },[apiData])

 


  return (
    <div className='play-video'> 
      {/* <video src={video1} controls autoPlay muted > </video>
       */}
       <iframe width="668" height="376" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
      <h3> {apiData?apiData.snippet.title:"title here"}  </h3>
      <div className="play-video-info"> 
        <p> {apiData?valu_conventor(apiData.statistics.viewCount):"23k"} &bull; 
           {apiData?moment(apiData.snippet.publishedAt).fromNow():""} 
            </p>
      <div>
        <span> <img src={like} alt="" /> {apiData?valu_conventor(apiData.statistics.likeCount):"no information for like data "}  </span>
        <span> <img src={dislike} alt="" /> 15  </span>
        <span> <img src={share} alt="" /> 15  </span>
        <span> <img src={save} alt="" /> 125k  </span>
      </div>
      </div>
      <hr />
      <div className='publisher'> 
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
          <p> {apiData?apiData.snippet.channelTitle:""} </p>
          <span> {channelData?valu_conventor(channelData.statistics.subscriberCount):"1M"} Subscribe </span>
        </div>
        <button> Subcribe </button>
        
      </div>
      <div className="vid-description">
        <p> {apiData?apiData.snippet.description.slice(0,250):"descripton here   "} </p>
        <hr />
        <h4> {apiData?valu_conventor(apiData.statistics.commentCount):"334"} Comments </h4>
       {commentData.map((item,index)=>{
        return (

          <div key={index} className='comment' >
          <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
          <div>
            <h3> {item.snippet.topLevelComment.snippet.authorDisplayName} <span>

            {item?moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow():""}  
                 </span> </h3>
            <p> {item.snippet.topLevelComment.snippet.textOriginal} </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span> {item.snippet.topLevelComment.snippet.likeCount}  </span>
              <img src={dislike} alt="" />

            </div>
          </div>

        </div>
        )
       })

     
       
       }
       
       
      </div>


      {/* <div>
           <Recomended/>
         </div> */}

        
         </div>
  )
}

export default PlayVideo