import { defineLive } from 'next-sanity/live'
import { client } from './client'

export const { sanityFetch, SanityLive } = defineLive({
  client,
  // serverToken enables real-time updates in production without a rebuild.
  // Generate one at: https://www.sanity.io/manage → your project → API → Tokens
  // Give it "Viewer" permissions and add to .env as SANITY_API_READ_TOKEN
  serverToken: process.env.SANITY_API_READ_TOKEN,
  browserToken: process.env.SANITY_API_READ_TOKEN,
})
