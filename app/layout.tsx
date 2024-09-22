import './globals.scss'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insyncx | Home',
  description: 'Connecting talents with opportunities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
  )
}
