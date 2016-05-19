import React, { Component } from 'react'

import VideoItem from './VideoItem'


const VideoList = (props) => {
  const videoItems = props.videos.map((video, i)=> {
    return <VideoItem
       onVideoSelect={props.onVideoSelect}
       key={i}
       video={video}/>
  })
    return (
      <ul>
        {videoItems}
      </ul>
    )
}

export default VideoList
