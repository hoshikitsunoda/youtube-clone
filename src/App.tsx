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

export interface VideoListData {
  id: string
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
  let videoDataList: VideoListData[] = []
  const initialState = [] as VideoListData[]

  const [videoData, setVideoData] = useState<VideoListData[]>(initialState)

  const fetchVideosHandler = async (keyword: string) => {
    const response = await api.get<VideoDataArray>('/search', {
      params: {
        q: keyword,
      },
    })

    response.data.items.map((video) => {
      const videoDataObj = {
        id: video.id.videoId,
        snippet: {
          channelId: video.snippet.channelId,
          channelTitle: video.snippet.channelTitle,
          description: video.snippet.description,
          thumbnails: video.snippet.thumbnails,
          title: video.snippet.title,
        },
      }
      videoDataList.push(videoDataObj)

      return videoDataList
    })

    setVideoData(videoDataList)
  }

  return (
    <div>
      <SearchBar fetchVideo={fetchVideosHandler} />
      <VideoList videoData={videoData} />
    </div>
  )
}

export default App
