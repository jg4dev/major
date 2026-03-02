"use client"

import { motion } from "framer-motion"

const produtos = [
  { id: 1, nome: "Filtro de Óleo", marca: "Fram", preco: "R$ 35,00", estoque: 42 },
  { id: 2, nome: "Óleo 5W30", marca: "Mobil", preco: "R$ 49,90", estoque: 18 },
  { id: 3, nome: "Filtro de Ar", marca: "Tecfil", preco: "R$ 29,90", estoque: 65 },
]

export default function Produtos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Header da página */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Produtos</h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-medium
                     hover:bg-yellow-500 transition-all duration-300"
        >
          + Novo Produto
        </motion.button>
      </div>

      {/* Barra de busca */}
      <div>
        <input
          type="text"
          placeholder="Buscar produto..."
          className="w-full bg-[#242426] border border-[#2F2F32] 
                     rounded-xl px-4 py-3 
                     focus:outline-none focus:border-yellow-400
                     transition-all duration-300"
        />
      </div>

      {/* Tabela */}
      <div className="bg-[#242426] border border-[#2F2F32] rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#1F1F21] text-gray-400 text-sm">
            <tr>
              <th className="px-6 py-4">Produto</th>
              <th className="px-6 py-4">Marca</th>
              <th className="px-6 py-4">Preço</th>
              <th className="px-6 py-4">Estoque</th>
            </tr>
          </thead>

          <tbody>
            {produtos.map((produto, index) => (
              <motion.tr
                key={produto.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-t border-[#2F2F32] 
                           hover:bg-[#2A2A2D] 
                           transition-colors duration-200"
              >
                <td className="px-6 py-4 font-medium">
                  {produto.nome}
                </td>
                <td className="px-6 py-4 text-gray-400">
                  {produto.marca}
                </td>
                <td className="px-6 py-4 text-yellow-400 font-medium">
                  {produto.preco}
                </td>
                <td className="px-6 py-4">
                  {produto.estoque}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}