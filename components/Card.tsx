"use client"

import { motion } from "framer-motion"

interface Props {
  title: string
  value: string
  delay?: number
}

export default function Card({ title, value, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="
        bg-[#242426]
        border border-[#2F2F32]
        p-6
        rounded-2xl
        hover:border-yellow-400
        transition-all duration-300
      "
    >
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="text-2xl font-semibold mt-2">{value}</h3>
    </motion.div>
  )
}