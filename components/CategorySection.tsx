// components/CategorySection.tsx
export default function CategorySection() {
  const categories = [
    { title: "Filtros de Óleo", description: "Para veículos e máquinas" },
    { title: "Filtros de Ar", description: "Ambientes limpos e seguros" },
    { title: "Lubrificantes", description: "Óleos premium para desempenho" },
  ]

  return (
    <section id="produtos" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white">Nossas Soluções</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {categories.map((c) => (
          <div
            key={c.title}
            className="bg-[#242426] p-6 rounded-xl border border-[#2F2F32] hover:border-yellow-400 transition"
          >
            <h3 className="text-2xl font-bold text-yellow-400">{c.title}</h3>
            <p className="text-gray-300 mt-2">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}