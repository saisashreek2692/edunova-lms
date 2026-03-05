import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import {
  generateAccessToken,
  generateRefreshToken
} from '@/lib/jwt'
import { setAuthCookies } from '@/lib/cookies'

export async function POST(req) {
  const { email, password, role } = await req.json()

  if (!email || !password) {
    return NextResponse.json(
      { message: 'Missing fields' },
      { status: 400 }
    )
  }

  const hashed = await bcrypt.hash(password, 10)

  // TODO: Save user to DB (replace with real DB logic)
  const user = {
    id: Date.now(),
    email,
    role: role || 'student'
  }

  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)

  const response = NextResponse.json({
    message: 'Registered successfully'
  })

  setAuthCookies(response, accessToken, refreshToken)

  return response
}