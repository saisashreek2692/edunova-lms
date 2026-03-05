import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import {
  generateAccessToken,
  verifyRefreshToken
} from '@/lib/jwt'

export async function POST() {
  const cookieStore = cookies()
  const token = cookieStore.get('refreshToken')?.value

  if (!token) {
    return NextResponse.json({ status: 401 })
  }

  try {
    const user = verifyRefreshToken(token)
    const newAccess = generateAccessToken(user)

    const response = NextResponse.json({ ok: true })
    response.cookies.set('accessToken', newAccess, {
      httpOnly: true,
      path: '/'
    })

    return response
  } catch {
    return NextResponse.json({ status: 403 })
  }
}