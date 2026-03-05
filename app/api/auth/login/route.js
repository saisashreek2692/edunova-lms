import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import {
  generateAccessToken,
  generateRefreshToken
} from '@/lib/jwt'
import { setAuthCookies } from '@/lib/cookies'

export async function POST(req) {
  const { email, password } = await req.json()

  // Replace with DB lookup
  const user = {
    id: 1,
    email,
    role: 'student'
  }

  const valid = await bcrypt.compare(password, await bcrypt.hash(password, 10))

  if (!valid) {
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    )
  }

  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)

  const response = NextResponse.json({ message: 'Login success' })

  setAuthCookies(response, accessToken, refreshToken)

  return response
}