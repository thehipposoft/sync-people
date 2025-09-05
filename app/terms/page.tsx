import PublicLayout from "@/components/PublicLayout";
import { format } from "date-fns";
import { ROUTES } from "../constants";

export const metadata = {
    title: "Terms & Conditions | Insyncx",
    description: "Read the Insyncx Terms & Conditions. Learn about your rights, responsibilities, and the rules for using our platform to connect with employers in Australia.",
    openGraph: {
        title: "Terms & Conditions | Insyncx",
        description: "Understand the rules for using Insyncx. Review our terms of service covering accounts, usage, privacy, and legal obligations.",
        url: "https://insyncx.com/terms-and-conditions",
        siteName: "Insyncx",
        images: [
        {
            url: "/assets/og-image.png",
            width: 1200,
            height: 630,
            alt: "Insyncx Terms & Conditions",
        },
        ],
        locale: "en_AU",
        type: "website",
    },
}

export default async function TermsPage() {
    return(
        <PublicLayout>
            <script type="application/ld+json">
                {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "TermsOfService",
                "name": "Insyncx Terms & Conditions",
                "url": "https://insyncx.com/terms-and-conditions",
                "description": "The official Terms & Conditions of Insyncx, outlining rules, user rights, and responsibilities when using our platform.",
                "provider": {
                    "@type": "Organization",
                    "name": "Insyncx",
                    "url": "https://insyncx.com",
                    "logo": "https://insyncx.com/logo.png"
                },
                "inLanguage": "en-AU"
                })}
            </script>
            <div className="my-8 px-6">
                <h1>Terms and Conditions</h1>
                <p className="my-4">
                    Last updated: {format(new Date(), "MMMM d, yyyy")}
                </p>
                <p>
                    Welcome to <span className="font-bold">Insyncx</span>. By accessing or using our website and services, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services.
                </p>
                <h2 className="my-5 text-3xl">
                    1. About Insyncx
                </h2>
                <p>
                    Insyncx is a digital platform that connects individuals (“Talents”) with opportunities, employers, and service providers. We are <span className="font-bold">not</span> an employer, recruiter, or representative of any listed opportunities.
                </p>
                <h2 className="my-5 text-3xl">2. User Responsibilities</h2>
                <ul className="list-disc ml-5">
                    <li>You agree to provide accurate and truthful information in your profile and any uploaded content.</li>
                    <li>You are solely responsible for the content you submit (including text, images, and videos).</li>
                    <li>You will not use Insyncx for spam, misleading information, harassment, or unlawful activity.</li>
                </ul>
                <h2 className="my-5 text-3xl">3. Content and Intellectual Property</h2>
                <ul className="list-disc ml-5">
                    <li>By uploading or submitting content, you grant Insyncx a non-exclusive, worldwide, royalty-free licence to use, display, and share that content within the platform.</li>
                    <li>All Insyncx branding, logos, and materials are owned by Insyncx and may not be used without permission.</li>
                </ul>
                <h2 className="my-5 text-3xl">4. Third-Party Opportunities</h2>
                <ul className="list-disc ml-5">
                    <li>Insyncx is not responsible for the accuracy, availability, or outcome of any job, course, or opportunity listed on the platform.</li>
                    <li>Any agreements or contracts entered into with third parties are solely between you and that party.</li>
                </ul>
                <h2 className="my-5 text-3xl">5. Privacy and Data</h2>
                <p>
                    Your use of Insyncx is also governed by our <a href={ROUTES.PRIVACY_POLICY} className="underline">Privacy Policy</a>. By using our platform, you consent to the collection, storage, and use of your data as outlined there.
                </p>
                <h2 className="my-5 text-3xl">6. Limitation of Liability</h2>
                <ul className="list-disc ml-5">
                    <li>Insyncx does not guarantee that you will secure employment, contracts, or opportunities through the platform.</li>
                    <li>Insyncx is not liable for any loss, damage, or disputes arising from your use of the platform or third-party interactions.</li>
                </ul>
                <h2 className="my-5 text-3xl">7. Account Suspension or Termination</h2>
                <p>
                    We may suspend or terminate accounts that breach these Terms, post inappropriate content, or misuse the platform.
                </p>
                <h2 className="my-5 text-3xl">8. Governing Law</h2>
                <p>
                    These Terms are governed by the laws of <span className="font-bold">Australia</span>. Any disputes will be resolved under the jurisdiction of the courts of Victoria, Australia.
                </p>
                <h2 className="my-5 text-3xl">9. Changes to Terms</h2>
                <p>
                    We may update these Terms from time to time. Continued use of the platform means you accept the updated Terms.
                </p>
                <h2 className="my-5 text-3xl">10. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact us.
                </p>
            </div>
        </PublicLayout>
    )
}
