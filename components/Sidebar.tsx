"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Produtos", path: "/produtos" },
    { name: "Clientes", path: "/clientes" },
    { name: "Vendas", path: "/vendas" },
  ]

  return (
    <aside className="w-64 bg-[#111111] border-r border-[#2F2F32] p-6">
      <h1 className="text-xl font-semibold text-yellow-400 mb-12 tracking-wide">
        Major Filtros
      </h1>

      <nav className="flex flex-col gap-3">
        {menu.map((item) => {
          const active = pathname === item.path

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                active
                  ? "bg-yellow-400 text-black font-medium"
                  : "text-gray-400 hover:bg-[#242426] hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}