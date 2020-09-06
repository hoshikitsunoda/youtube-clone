import React from 'react'

import api from './utils/api'
import SearchBar from './components/SearchBar'

const App: React.FC = () => {
  const fetchVideosHandler = async (keyword: string) => {
    const response = await api.get('/search', {
      params: {
        q: keyword,
      },
    })

    console.log(response)
  }

  return (
    <div>
      <SearchBar fetchVideo={fetchVideosHandler} />
    </div>
  )
}

export default App
