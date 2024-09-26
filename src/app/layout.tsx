import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['cyrillic'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'А-Лизинг',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}
