import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joshua Castillo - Front-End Developer',
  description: 'Front-end developer specializing in React, modern web applications, and clean UX. Portfolio of projects, case studies, and contact info.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

