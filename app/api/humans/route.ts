import { HUMANSTXT } from '@/config/constants'
import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(HUMANSTXT, {
    headers: {
      'Content-Type': 'text/plain; charset=UTF-8',
    },
  })
}
