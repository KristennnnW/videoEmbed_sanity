import {sanityClient} from '../lib/sanity'
import Body from '../components/Body.tsx'

export async function getStaticProps() {
  const query = `*[_type == "post"]{..., body[]{..., "url": asset->url}}`
  const posts = await sanityClient.fetch(query)
  return {props: {posts}}
}

export default function Home({posts}) {
  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <Body blocks={post.body} />
        </div>
      ))}
    </div>
  )
}
