import createMDX from '@next/mdx'
import { NextConfig } from 'next'
import { version as VERSION } from './package.json'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  env: {
    VERSION
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  rewrites: async () => ({
    afterFiles: [
      {
        source: '/humans.txt',
        destination: '/api/humans',
      },
      {
        source: '/.well-known/humans.txt',
        destination: '/api/humans',
      },
    ],
  }),
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
