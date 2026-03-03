export default function Solucoes() {
  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold mb-12 text-yellow-400">
          Nossas Soluções
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 border border-[#2A2A2A] rounded-xl hover:border-yellow-400 transition">
            <h3 className="text-2xl font-bold mb-4">Filtros de Óleo</h3>
            <p className="text-gray-400">
              Proteção e desempenho para motores automotivos.
            </p>
          </div>

          <div className="p-6 border border-[#2A2A2A] rounded-xl hover:border-yellow-400 transition">
            <h3 className="text-2xl font-bold mb-4">Filtros de Ar</h3>
            <p className="text-gray-400">
              Máxima eficiência na retenção de partículas.
            </p>
          </div>

          <div className="p-6 border border-[#2A2A2A] rounded-xl hover:border-yellow-400 transition">
            <h3 className="text-2xl font-bold mb-4">Lubrificantes</h3>
            <p className="text-gray-400">
              Óleos de alta qualidade para longa durabilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}