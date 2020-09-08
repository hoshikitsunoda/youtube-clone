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
