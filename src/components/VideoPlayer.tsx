import React from 'react'
import { VideoData } from '../types/types'

export interface Props {
  selectedVideo: VideoData
}

const VideoPlayer: React.FC<Props> = ({ selectedVideo }) => {
  if (!selectedVideo.id) return <div>Loading...</div>
  const videoId: string = selectedVideo.id.videoId
  const videoSrc: string = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="w-3/5 flex items-center flex-col p-8">
      <iframe
        src={videoSrc}
        frameBorder="0"
        width="500px"
        height="315px"
        title={videoId}
        allowFullScreen
      ></iframe>
      <div className="p-8">
        <p className="text-base leading-5 text-left my-4">
          {selectedVideo.snippet.title}
        </p>
        <p className="text-sm text-gray-700 text-left mb-2">
          {selectedVideo.snippet.channelTitle}
        </p>
        <p className="text-xs">{selectedVideo.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoPlayer
