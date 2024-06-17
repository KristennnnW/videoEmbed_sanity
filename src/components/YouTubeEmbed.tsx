import React from 'react'
import ReactPlayer from 'react-player'

type YouTubeEmbedProps = {
  url: string
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({url}) => {
  return <ReactPlayer url={url} />
}

export default YouTubeEmbed
