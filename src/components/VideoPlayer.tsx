import React from 'react'

export interface Image {
  url: string
  width: number
  height: number
}

export interface Props {
  selectedVideo: {
    id: {
      videoId: string
    }
    snippet: {
      channelId: string
      channelTitle: string
      description: string
      thumbnails: {
        default: Image
        high: Image
        medium: Image
      }
      title: string
    }
  }
}

const VideoPlayer: React.FC<Props> = ({ selectedVideo }) => {
  if (!selectedVideo.id) return <div>Loading...</div>
  const videoId: string = selectedVideo.id.videoId
  const videoSrc: string = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="w-9/12 flex items-center flex-col p-8">
      <iframe
        src={videoSrc}
        frameBorder="0"
        width="500px"
        height="315px"
        title={videoId}
        allowFullScreen
      ></iframe>
      <p className="text-base leading-5 text-left">
        {selectedVideo.snippet.title}
      </p>
      <p className="text-sm text-gray-700 text-left">
        {selectedVideo.snippet.channelTitle}
      </p>
      <p className="text-xs">{selectedVideo.snippet.description}</p>
    </div>
  )
}

export default VideoPlayer
