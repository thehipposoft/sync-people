import React from 'react';
import LoginMenu from '@/app/login/Login';
import PublicLayout from '@/components/PublicLayout';

export const metadata = {
    title: "Login | Insyncx - Access Your Digital Portfolio",
    description: "Log in to your Insyncx account to access your digital portfolio, update your profile, and connect with employers across Australia.",
    openGraph: {
        title: "Login | Insyncx - Access Your Digital Portfolio",
        description: "Login to Insyncx and manage your digital portfolio. Showcase your skills and connect with employers in Australia.",
        url: "https://insyncx.com/login",
        siteName: "Insyncx",
        images: [
        {
            url: "/assets/og-login.png",
            width: 1200,
            height: 630,
            alt: "Login to Insyncx",
        },
        ],
        locale: "en_AU",
        type: "website",
    },
}

export default async function LoginPage() {
    return(
        <PublicLayout>
            <script type="application/ld+json">
                {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Login - Insyncx",
                "url": "https://insyncx.com/login",
                "description": "Log in to your Insyncx account and access your digital portfolio to connect with employers in Australia.",
                "isPartOf": {
                    "@type": "WebSite",
                    "name": "Insyncx",
                    "url": "https://insyncx.com"
                },
                "potentialAction": {
                    "@type": "LoginAction",
                    "target": "https://insyncx.com/login"
                }
                })}
            </script>
            <LoginMenu />
        </PublicLayout>
    )
}

