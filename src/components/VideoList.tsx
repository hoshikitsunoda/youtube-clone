import React from 'react'

export interface Image {
  url: string
  width: number
  height: number
}

export interface VideoData {
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

export interface Props {
  videoData: VideoData[]
  selectVideo: (video: any) => void
}

const VideoList: React.FC<Props> = ({ videoData, selectVideo }) => {
  const list = videoData.map(({ id, snippet }) => {
    return (
      <div
        key={id.videoId}
        className="row-span-1 col-span-2 p-8"
        onClick={() => selectVideo({ id, snippet })}
      >
        <img
          className="w-full"
          src={snippet.thumbnails.default.url}
          alt={snippet.title}
        />
        <p className="text-sm leading-5">{snippet.title}</p>
        <p className="text-xs text-gray-700">{snippet.channelTitle}</p>
      </div>
    )
  })

  return <div className="w-3/12 column-start-2 row-span-1">{list}</div>
}

export default VideoList
