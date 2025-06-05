import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Claude Code マスター講座 | AIプログラミングの新時代',
  description: 'Claude Codeを使って効率的にプログラミングを行う方法を学ぶ実践的な講座です。初心者から上級者まで、AIを活用したコーディングスキルを習得できます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}