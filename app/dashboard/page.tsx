"use client"

import { motion } from "framer-motion"
import Card from "@/components/Card"

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-semibold"
      >
        Major Filtros e Lubrificantes
      </motion.h1>

      <div className="grid grid-cols-3 gap-6">
        <Card title="Vendas Hoje" value="R$ 4.850,00" delay={0.2} />
        <Card title="Faturamento Mensal" value="R$ 52.300,00" delay={0.4} />
        <Card title="Produtos em Estoque" value="1.284" delay={0.6} />
      </div>
    </motion.div>
  )
}