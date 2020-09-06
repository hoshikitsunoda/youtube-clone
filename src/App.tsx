import React, { useState } from 'react'

import api from './utils/api'
import SearchBar from './components/SearchBar'

interface VideoData {
  response: {
    data: {
      items: {}[]
    }
  }
}

const App: React.FC = () => {
  const [videoData, setVideoData] = useState<VideoData>()

  const fetchVideosHandler = async (keyword: string) => {
    const response = await api.get('/search', {
      params: {
        q: keyword,
      },
    })

    setVideoData(response.data.items)
  }

  console.log(videoData)

  return (
    <div>
      <SearchBar fetchVideo={fetchVideosHandler} />
    </div>
  )
}

export default App
