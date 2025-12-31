import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Javari Health | Find Healthcare Providers Near You',
  description: 'Find and compare doctors, dentists, specialists, and healthcare providers. Read reviews and book appointments online.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
