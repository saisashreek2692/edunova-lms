'use client'
import { motion } from 'framer-motion'

export default function KPICard({ title, value }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 shadow-soft"
    >
      <h4 className="text-gray-500 text-sm">{title}</h4>
      <p className="text-3xl font-semibold mt-2">{value}</p>
    </motion.div>
  )
}