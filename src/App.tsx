import React, { useState } from 'react'

import api from './utils/api'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'

export interface Image {
  url: string
  width: number
  height: number
}

export interface VideoData {
  kind?: string
  etag?: string
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

export interface VideoDataArray {
  items: VideoData[]
}

const App: React.FC = () => {
  let videoDataList: VideoData[] = []
  const initialState: VideoData[] = []

  const [videoData, setVideoData] = useState<VideoData[]>(initialState)

  const fetchVideosHandler = async (keyword: string) => {
    const response = await api.get<VideoDataArray>('/search', {
      params: {
        q: keyword,
      },
    })

    response.data.items.map(({ etag, kind, ...videoProps }) => {
      videoDataList.push(videoProps)

      return videoDataList
    })

    setVideoData(videoDataList)
  }

  return (
    <div className="grid grid-rows-3">
      <SearchBar fetchVideo={fetchVideosHandler} />
      <div>
        <VideoList videoData={videoData} />
      </div>
    </div>
  )
}

export default App
