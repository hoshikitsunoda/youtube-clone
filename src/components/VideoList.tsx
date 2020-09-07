import React from 'react'

interface Props {
  videoData: {
    kind: string
    etag: string
    id: {}
    snippet: {
      channelId: string
      channelTitle: string
      description: string
      liveBroadcastContent: string
      publishTime: string
      publishedAt: string
      thumbnails: {
        default: {
          url: string
          width: number
          height: number
        }
        high: {
          url: string
          width: number
          height: number
        }
        medium: {
          url: string
          width: number
          height: number
        }
      }
      title: string
    }
  }[]
}

const VideoList = (props: any) => {
  console.log(props)
  return <div>List</div>
}

export default VideoList
