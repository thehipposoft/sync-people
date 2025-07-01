import './globals.scss'
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import SchemaOrg from '@/components/SchemaOrg';
import { ViewTransitions } from "next-view-transitions";
import { Providers } from "./providers";
import InstallButton from '@/components/DownloadButton';

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
    title: 'Insyncx | Home',
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
        apple: '/icons/apple-touch-icon.png',
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


const RootLayout = async ({ children }: {
  children: React.ReactNode
}) => {
    return (
        <ViewTransitions>
            <html lang="en">
                <body className={`${openSans.variable} ${poppinsRegular.variable} ${poppinsBold.variable}`}>
                    <GoogleAnalytics />
                    <SchemaOrg />
                    <Providers>
                        {children}
                    </Providers>
                    <InstallButton />
                </body>
            </html>
        </ViewTransitions>
    )
};

export default RootLayout;
