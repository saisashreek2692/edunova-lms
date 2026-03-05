'use client'
import { Menu, Bell } from 'lucide-react'

export default function Header({ setOpen }) {
  return (
    <header className="bg-white shadow-soft px-8 py-4 flex justify-between items-center">
      <button
        className="lg:hidden"
        onClick={() => setOpen(prev => !prev)}
      >
        <Menu />
      </button>

      <div className="flex items-center gap-6">
        <Bell className="text-gray-500" />
        <div className="w-10 h-10 rounded-full bg-brand-gradient" />
      </div>
    </header>
  )
}