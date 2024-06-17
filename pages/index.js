import React, { useEffect, useState } from 'react';
import {sanityClient} from '../lib/sanity'
import Body from '../src/components/Body'

export async function getStaticProps() {
  const query = `*[_type == "post"]{..., body[]{..., "url": asset->url}}`
  const posts = await sanityClient.fetch(query)
  return {props: {posts}}
}

const Home = ({ posts }) => {
    const [domLoaded, setDomLoaded] = useState(false);
  
    useEffect(() => {
      setDomLoaded(true);
    }, []);
  
    if (!domLoaded) {
      return null; // or a loading spinner, or some fallback content
    }
  
    return (
      <div>
        {posts.map(post => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <Body blocks={post.body} />
          </div>
        ))}
      </div>
    );
  };
  
  export default Home;