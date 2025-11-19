import type { Metadata } from 'next'
import './globals.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  title: 'Joshua Castillo - Front-End Developer',
  description: 'Front-end developer specializing in React, modern web applications, and clean UX. Portfolio of projects, case studies, and contact info.',
  icons: {
    icon: `${basePath}/favicon.png`,
  },
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
