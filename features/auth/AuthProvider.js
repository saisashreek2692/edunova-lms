'use client'
import { createContext, useEffect } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/auth/refresh', { method: 'POST' })
    }, 1000 * 60 * 10)

    return () => clearInterval(interval)
  }, [])

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}