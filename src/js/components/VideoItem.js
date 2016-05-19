import React from 'react'


const VideoItem = ({video, onVideoSelect}) => {
  return (
    <li onClick={() => onVideoSelect(video)}>
       <a href="">{video.snippet.title}</a>
       <img src={video.snippet.thumbnails.default.url} />
    </li>
  )
}

export default VideoItem
