import type { Metadata } from 'next';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import SchemaOrg from '@/components/SchemaOrg';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '../constants';

export const metadata: Metadata = {
  title: 'Insyncx | Talent Portal',
  description: 'Talent Portal',
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
                <div>
                    {children}
                </div>
            </body>
        </html>
  )
}
