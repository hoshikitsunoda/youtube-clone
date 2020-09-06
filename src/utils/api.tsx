import axios from 'axios'

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

interface Params {
  baseURL: string
  params: {
    part: string
    maxResults: number
    key: string | undefined
  }
}

const config: Params = {
  baseURL: `https://www.googleapis.com/youtube/v3`,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  },
}

export default axios.create(config)
