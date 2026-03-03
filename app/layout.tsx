import "./globals.css"
import Navbar from "@/components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#111111] text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}