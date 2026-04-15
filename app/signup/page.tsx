import type { Metadata } from 'next';
import SignUp from './SignUp';
import PublicLayout from '@/components/PublicLayout';

export const metadata: Metadata = {
    title: "Sign Up | Insyncx - Create Your Skills Portfolio",
    description: "Join Insyncx today and create your Skills Portfolio. Showcase your skills, connect with employers, and discover work opportunities in Australia for backpackers, students, and skilled workers.",
    alternates: {
        canonical: "https://insyncx.com/signup",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Sign Up | Insyncx - Create Your Skills Portfolio",
        description: "Sign up for Insyncx to connect with employers in Australia. Build your profile, highlight your skills, and find the right work opportunities.",
        url: "https://insyncx.com/signup",
        siteName: "Insyncx",
        images: [
        {
            url: "https://insyncx.com/assets/og-signup.png",
            width: 1200,
            height: 630,
            alt: "Sign up for Insyncx",
        },
        ],
        locale: "en_AU",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sign Up | Insyncx - Create Your Skills Portfolio",
        description: "Sign up for Insyncx to connect with employers in Australia. Build your profile, highlight your skills, and find the right work opportunities.",
        images: ["https://insyncx.com/assets/og-signup.png"],
    },
}

export default async function SignUpPage() {
    const registerSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Sign Up - Insyncx",
        "url": "https://insyncx.com/signup",
        "description": "Create your Insyncx Skills Portfolio. Sign up to showcase your skills and connect with employers in Australia.",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Insyncx",
            "url": "https://insyncx.com"
        },
        "potentialAction": {
            "@type": "RegisterAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://insyncx.com/signup"
            },
            "result": {
                "@type": "Person",
                "name": "Insyncx Talent Profile"
            }
        }
    };

    return(
        <PublicLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(registerSchema) }}
            />
            <SignUp />
        </PublicLayout>
    )
}
