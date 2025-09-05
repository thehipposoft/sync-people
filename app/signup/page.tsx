import SignUp from './SignUp';
import PublicLayout from '@/components/PublicLayout';

export const metadata = {
    title: "Sign Up | Insyncx - Create Your Digital Portfolio",
    description: "Join Insyncx today and create your digital portfolio. Showcase your skills, connect with employers, and discover work opportunities in Australia for backpackers, students, and skilled workers.",
    openGraph: {
        title: "Sign Up | Insyncx - Create Your Digital Portfolio",
        description: "Sign up for Insyncx to connect with employers in Australia. Build your profile, highlight your skills, and find the right work opportunities.",
        url: "https://insyncx.com/signup",
        siteName: "Insyncx",
        images: [
        {
            url: "/assets/og-signup.png",
            width: 1200,
            height: 630,
            alt: "Sign up for Insyncx",
        },
        ],
        locale: "en_AU",
        type: "website",
    },
}

export default async function SignUpPage() {
    return(
        <PublicLayout>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Sign Up - Insyncx",
                    "url": "https://insyncx.com/signup",
                    "description": "Create your Insyncx digital portfolio. Sign up to showcase your skills and connect with employers in Australia.",
                    "isPartOf": {
                        "@type": "WebSite",
                        "name": "Insyncx",
                        "url": "https://insyncx.com"
                    },
                    "potentialAction": {
                        "@type": "RegisterAction",
                        "target": "https://insyncx.com/signup",
                        "result": {
                        "@type": "Person",
                        "name": "Insyncx Talent Profile"
                        }
                    }
                })}
            </script>
            <SignUp />
        </PublicLayout>
    )
}
