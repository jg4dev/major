"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
      
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/filtro-bg.jpg" 
          alt="Filtros automotivos"
          fill
          className="object-cover opacity-40"
        />
      </div>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl px-6"
      >
        <h1 className="text-6xl font-bold mb-6">
          <span className="text-yellow-400">Major</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Filtros e Lubrificantes de alta performance para veículos e indústrias.
        </p>

        <Link
          href="/dashboard"
          className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Acessar Sistema
        </Link>
      </motion.div>
    </section>
  )
}