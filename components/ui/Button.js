'use client'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function Button({
  children,
  variant = 'primary',
  className,
  ...props
}) {
  const base =
    'px-6 py-3 rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500'

  const variants = {
    primary:
      'bg-brand-gradient text-white shadow-soft hover:scale-[1.02]',
    secondary:
      'border border-gray-300 text-gray-700 hover:bg-gray-100',
    ghost:
      'text-gray-600 hover:bg-gray-100'
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}