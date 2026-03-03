"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-[#2A2A2A]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-yellow-400">Major</span>
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-gray-300">
          <Link href="/" className="hover:text-yellow-400 transition">
            Início
          </Link>
          <Link href="#solucoes" className="hover:text-yellow-400 transition">
            Soluções
          </Link>
          <Link href="#sobre" className="hover:text-yellow-400 transition">
            Sobre
          </Link>
          <Link href="#contato" className="hover:text-yellow-400 transition">
            Contato
          </Link>
        </nav>

        {/* Botão */}
        <Link
          href="/dashboard"
          className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Área Interna
        </Link>

      </div>
    </motion.header>
  )
}