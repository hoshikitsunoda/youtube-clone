import React, { useState, useCallback } from 'react'

import api from './utils/api'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'

import { VideoData } from '../src/types/types'

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
  const [errorMessage, setErrorMessage] = useState<string>('')

  const fetchVideosHandler = useCallback<(keyword: string) => Promise<void>>(
    async (keyword: string) => {
      try {
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
      } catch (error) {
        setErrorMessage(error.toString())
      }
    },
    [videoDataList]
  )

  const selectVideoHandler = (video: VideoData): void => {
    setSelectedVideo(video)
  }

  return (
    <div>
      <SearchBar fetchVideo={fetchVideosHandler} />
      <div className="flex mx-auto my-8 max-w-5xl justify-center">
        {errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          <VideoPlayer selectedVideo={selectedVideo} />
        )}
        <VideoList videoData={videoData} selectVideo={selectVideoHandler} />
      </div>
    </div>
  )
}

export default App
