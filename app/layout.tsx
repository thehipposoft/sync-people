import './globals.scss'
import type { Metadata } from 'next';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import SchemaOrg from '@/components/SchemaOrg';

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
                <GoogleAnalytics />
                <SchemaOrg />
                {children}
            </body>
        </html>
  )
}
