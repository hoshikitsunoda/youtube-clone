import React from 'react'
import axios from 'axios'

interface Params {
  baseURL: string
  params: {
    part: string
    maxResults: number
    key: string | undefined
  }
}

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

const api = () => {
  const config: Params = {
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params: {
      part: 'snippet',
      maxResults: 5,
      key: API_KEY,
    },
  }

  return axios.create(config)
}

export default api
