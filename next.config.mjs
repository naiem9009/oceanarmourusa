/** @type {import('next').NextConfig} */
import { withPayload } from '@payloadcms/next/withPayload'
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default withPayload(nextConfig, { configPath: './payload.config.ts' })
