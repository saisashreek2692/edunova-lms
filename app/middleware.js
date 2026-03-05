import { NextResponse } from 'next/server'
import { verifyAccessToken } from './lib/jwt'

export function middleware(req) {
  const token = req.cookies.get('accessToken')?.value

  const protectedRoutes = ['/dashboard']

  if (
    protectedRoutes.some(route =>
      req.nextUrl.pathname.startsWith(route)
    )
  ) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    try {
      verifyAccessToken(token)
    } catch {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  return NextResponse.next()
}