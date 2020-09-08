import React, { useState, useCallback } from 'react'

import api from './utils/api'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'

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
  const initialVideoList: VideoData[] = []
  const initialSelectedVideo = {} as VideoData

  const [videoData, setVideoData] = useState<VideoData[]>(initialVideoList)
  const [selectedVideo, setSelectedVideo] = useState<VideoData>(
    initialSelectedVideo
  )

  const fetchVideosHandler = useCallback<(keyword: string) => Promise<void>>(
    async (keyword: string) => {
      const {
        data: { items },
      } = await api.get<VideoDataArray>('/search', {
        params: {
          q: keyword,
        },
      })

      items.map(({ etag, kind, ...videoProps }) => {
        videoDataList.push(videoProps)

        return videoDataList
      })
      setSelectedVideo(videoDataList[0])
      setVideoData(videoDataList)
    },
    [videoDataList]
  )

  const selectVideoHandler = (video: VideoData): void => {
    setSelectedVideo(video)
  }

  return (
    <div>
      <SearchBar fetchVideo={fetchVideosHandler} />
      <div className="flex mx-auto my-8 max-w-5xl">
        <VideoPlayer selectedVideo={selectedVideo} />
        <VideoList videoData={videoData} selectVideo={selectVideoHandler} />
      </div>
    </div>
  )
}

export default App
