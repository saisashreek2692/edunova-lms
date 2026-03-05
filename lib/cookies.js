import { serialize } from 'cookie'

export function setAuthCookies(res, accessToken, refreshToken) {
  res.headers.append(
    'Set-Cookie',
    serialize('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 15
    })
  )

  res.headers.append(
    'Set-Cookie',
    serialize('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  )
}