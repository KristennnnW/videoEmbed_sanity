import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'zlexhwed',
  dataset: 'production', 
  useCdn: true, 
})
