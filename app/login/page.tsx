import type { Metadata } from 'next';
import LoginMenu from '@/app/login/Login';
import PublicLayout from '@/components/PublicLayout';

export const metadata: Metadata = {
    title: "Login | Insyncx - Access Your Skills Portfolio",
    description: "Log in to your Insyncx account to access your Skills Portfolio, update your profile, and connect with employers across Australia.",
    alternates: {
        canonical: "https://insyncx.com/login",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Login | Insyncx - Access Your Skills Portfolio",
        description: "Login to Insyncx and manage your Skills Portfolio. Showcase your skills and connect with employers in Australia.",
        url: "https://insyncx.com/login",
        siteName: "Insyncx",
        images: [
        {
            url: "https://insyncx.com/assets/og-login.png",
            width: 1200,
            height: 630,
            alt: "Login to Insyncx",
        },
        ],
        locale: "en_AU",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Login | Insyncx - Access Your Skills Portfolio",
        description: "Login to Insyncx and manage your Skills Portfolio. Showcase your skills and connect with employers in Australia.",
        images: ["https://insyncx.com/assets/og-login.png"],
    },
}

export default async function LoginPage() {
    const loginSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Login - Insyncx",
        "url": "https://insyncx.com/login",
        "description": "Log in to your Insyncx account and access your Skills Portfolio to connect with employers in Australia.",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Insyncx",
            "url": "https://insyncx.com"
        },
        "potentialAction": {
            "@type": "LoginAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://insyncx.com/login"
            }
        }
    };

    return(
        <PublicLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(loginSchema) }}
            />
            <LoginMenu />
        </PublicLayout>
    )
}

