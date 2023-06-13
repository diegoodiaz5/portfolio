import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Diego Díaz Portfolio',
  description: 'Mi portfolio',
  keywords: 'HTML, CSS, JavaScript, React, Next, Portfolio',
  author: 'Diego Díaz',
  viewport: 'width=device-width, initial-scale=1.0'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
