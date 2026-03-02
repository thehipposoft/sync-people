import './globals.scss'
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import { ViewTransitions } from 'next-view-transitions';

import GoogleAnalytics from '@/components/GoogleAnalytics';
import SchemaOrg from '@/components/SchemaOrg';
import { Providers } from './providers';

const openSans = localFont({
    src: [
        {
            path: './fonts/OpenSans-Regular.ttf',
            style: 'normal',
        },
      ],
    variable: '--font-open-sans-regular'
});

const poppinsRegular = localFont({
    src: [
        {
          path: './fonts/Poppins-Regular.ttf',
          style: 'normal',
        },
      ],
    variable: '--font-poppins-regular'
});

const poppinsBold = localFont({
    src: [
        {
          path: './fonts/Poppins-Bold.ttf',
          weight: '700',
          style: 'normal',
        },
      ],
    variable: '--font-poppins-bold'
});

export const metadata: Metadata = {
    title: 'Insyncx - Connecting talents with opportunities',
    description: 'Connecting talents with opportunities',
    manifest: '/manifest.json',
    keywords: [
        "Insyncx",
        "talents",
        "skills portfolio",
        "job seekers",
        "immigrants in Australia",
        "find a job",
        "online resume",
        "video resume",
        "Australian job market",
        "hospitality jobs",
        "construction jobs",
        "warehouse jobs",
        "casual jobs Australia",
        "backpackers",
        "international students",
    ],
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#7052E5' },
    ],
    authors: [
        {
            name: 'The Hipposoft',
            url: 'https://www.thehipposoft.com',
        },
    ],
    viewport:
        'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
    icons: {
        icon: '/icons/favicon.ico',
        apple: ['/icons/apple-touch-icon.png', '/icons/ios-512.png'],
        shortcut: '/icons/favicon-96x96.png',
        other: [
            {
                rel: 'mask-icon',
                url: '/icons/favicon.svg',
                color: '#7052E5',
            },
        ],
    },
    appleWebApp: {
        title: 'Insyncx',
        statusBarStyle: 'black-translucent',
        capable: true,
    },
    formatDetection: {
        telephone: false,
    },
};

type RootLayoutProps = {
    children: ReactNode,
};

const RootLayout = async ({ children }: RootLayoutProps) => {
    return (
        <ViewTransitions>
            <html lang="en" className="bg-slate-950">
                <body className={`${openSans.variable} ${poppinsRegular.variable} ${poppinsBold.variable} bg-slate-950 text-slate-100 antialiased selection:bg-emerald-400/70 selection:text-slate-950`}>
                    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                        <div className="absolute inset-x-[-30%] top-[-20%] h-[60vh] rounded-full bg-[radial-gradient(circle,_rgba(94,234,212,0.25),_transparent_60%)] blur-[120px]" />
                        <div className="absolute inset-x-[-10%] bottom-[-25%] h-[50vh] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_transparent_55%)] blur-[100px]" />
                        <div className="absolute inset-0 bg-[linear-gradient(145deg,_rgba(15,23,42,0.85),_rgba(15,15,35,0.6))]" />
                    </div>
                    <GoogleAnalytics />
                    <SchemaOrg />
                    <Providers>
                        {children}
                    </Providers>
                </body>
            </html>
        </ViewTransitions>
    )
};

export default RootLayout;
