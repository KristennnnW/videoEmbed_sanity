import React, { useEffect, useState } from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import YouTubeEmbed from './YouTubeEmbed';

const components: PortableTextComponents = {
  types: {
    youtube: ({ value }) => {
      const { url } = value as { url: string };
      return <YouTubeEmbed url={url} width="100%" height="auto" style={{ margin: '0 auto' }} />;
    },
  },
};

type BodyProps = {
  blocks: any; // Replace 'any' with the appropriate type if available
};

const Body: React.FC<BodyProps> = ({ blocks }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return null; 
  }

  // return <PortableText value={blocks} components={components} />;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {blocks.map((block: any, index: number) => (
        <div key={index} style={{ flex: '1 1 45%', boxSizing: 'border-box' }}>
          <PortableText value={[block]} components={components} />
        </div>
      ))}
    </div>
  );
};

export default Body;
