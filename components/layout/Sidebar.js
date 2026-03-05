'use client'
import { motion } from 'framer-motion'
import { Home, BookOpen, Users, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'

export default function Sidebar({ open }) {
  const links = [
    { href: '/dashboard/student', icon: Home, label: 'Dashboard' },
    { href: '/dashboard/student/courses', icon: BookOpen, label: 'Courses' },
    { href: '/dashboard/student/leaderboard', icon: Users, label: 'Leaderboard' },
    { href: '/dashboard/student/progress', icon: BarChart3, label: 'Progress' }
  ]

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className={clsx(
        'bg-white shadow-soft w-64 p-6 fixed lg:static h-full z-50'
      )}
    >
      <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-brand-gradient">
        EduNova
      </h2>

      <nav className="space-y-4">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition"
          >
            <link.icon size={20} />
            {link.label}
          </Link>
        ))}
      </nav>
    </motion.aside>
  )
}