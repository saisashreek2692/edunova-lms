'use client'
import { motion } from 'framer-motion'

export default function Card({ children, className }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`bg-white rounded-2xl shadow-soft p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}