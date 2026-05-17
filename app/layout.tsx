// app/layout.tsx — Javari Health
// Fortune 50 quality — uses AppShell for full ecosystem integration
// May 17, 2026 — CR AudioViz AI, LLC
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Javari Health | Javari by CR AudioViz AI',
  description: 'AI health resources and guidance',
  keywords: 'Javari Health, Javari, AI, CR AudioViz AI',
}

import AppShell from '@/components/AppShell'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppShell
          appName="Javari Health"
          appColor="#10b981"
          appEmoji="🏥"
          appDesc="AI health resources and guidance"
      handoffApp="Javari Fitness"
      handoffUrl="https://javari-fitness.vercel.app"
      handoffPitch="Pair health knowledge with a fitness plan →"
        >
          {children}
        </AppShell>
      </body>
    </html>
  )
}
