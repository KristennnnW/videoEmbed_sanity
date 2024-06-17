import React from 'react'
import {PortableText, PortableTextComponents} from '@portabletext/react'
import YouTubeEmbed from './YouTubeEmbed'

const components: PortableTextComponents = {
  types: {
    youtube: ({value}) => {
      const {url} = value as {url: string}
      return <YouTubeEmbed url={url} />
    },
  },
}

type BodyProps = {
  blocks: any // Replace 'any' with the appropriate type if available
}

const Body: React.FC<BodyProps> = ({blocks}) => {
  return <PortableText value={blocks} components={components} />
}

export default Body
