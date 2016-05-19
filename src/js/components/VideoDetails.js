import React from 'react'

const VideoDetails = ({video}) => {
  if(!video) {
    return <div>Loading </div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <iframe src={url} />
      <h3>{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
    </div>
  )
}

export default VideoDetails
