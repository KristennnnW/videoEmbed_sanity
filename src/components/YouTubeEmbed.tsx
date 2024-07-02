import React from 'react'
import ReactPlayer from 'react-player'

type YouTubeEmbedProps = {
  url: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  controls?: boolean;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ url, width = '100%', height = 'auto', style, controls = true }) => {
  return (
    <div style={{ ...style, position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <ReactPlayer url={url} width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }} controls={controls} />
    </div>
  )
}

export default YouTubeEmbed
