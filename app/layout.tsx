import Footer from '@/components/templates/footer'
import Header from '@/components/templates/header'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Porfolio Personal • 2025",
  description: "Porfolio personal de Matías Nápoli (2025)",
  icons: "/favicon.svg",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
        <Analytics/>
      </body>
    </html>
  )
}