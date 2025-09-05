import PublicLayout from "@/components/PublicLayout";
import { format } from "date-fns";

export default async function PrivacyPolicyPage() {
    return(
        <PublicLayout>
            <div className="my-8 px-6">
                <h1>Privacy Policy - Insyncx</h1>
                <p className="my-4">
                    Last updated: {format(new Date(), "MMMM d, yyyy")}
                </p>
                <p>
                    Insyncx (“we,” “our,” “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
                </p>
                <h2 className="my-5 text-3xl">
                    1. Information We Collect
                </h2>
                <p>
                    We may collect the following information when you use Insyncx:
                </p>
                <ul className="list-disc ml-5">
                    <li>
                        <span className="font-bold">Personal Information:</span> Name, contact details, date of birth, visa/work rights information.
                    </li>
                    <li>
                        <span className="font-bold">Profile Content:</span> Photos, videos, resumes, education, work experience, skills, and other content you upload.
                    </li>
                    <li>
                        <span className="font-bold">Usage Data:</span> Device type, browser, IP address, and interactions with our site.
                    </li>
                    <li>
                        <span className="font-bold">Communications:</span> Any messages, feedback, or enquiries you send us.
                    </li>
                </ul>
                <h2 className="my-5 text-3xl">
                    2. How We Use Your Information
                </h2>
                <p>
                    We use your information to:
                </p>
                <ul className="list-disc ml-5">
                    <li>Create and manage your account..</li>
                    <li>Display your profile and content to potential employers or opportunity providers.</li>
                    <li>Improve our services, features, and security.</li>
                    <li>Communicate with you about updates, support, or promotional material (if you opt-in).</li>
                    <li>Comply with legal and regulatory obligations.</li>
                </ul>
                <h2 className="my-5 text-3xl">
                    3. Sharing Your Information
                </h2>
                <p>
                    We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc ml-5">
                    <li><span className="font-bold">Employers, recruiters, or service providers </span>when you apply, connect, or make your profile public.</li>
                    <li><span className="font-bold">Service providers </span>who help us operate our platform (e.g., hosting, analytics, email services).</li>
                    <li><span className="font-bold">Legal authorities </span>when required by law.</li>
                </ul>
                <p>
                    We will never sell your personal data to third parties.
                </p>
                <h2 className="my-5 text-3xl">
                    4. Storage and Security
                </h2>
                <ul className="list-disc ml-5">
                    <li>Your data is stored on secure servers located in Australia (and/or other trusted locations, depending on hosting providers).</li>
                    <li>We use reasonable security measures to protect your personal information.</li>
                    <li>However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</li>
                </ul>
                <h2 className="my-5 text-3xl">
                    5. Your Rights
                </h2>
                <p>Under the <span className="font-bold">Australian Privacy Principles</span>, you have the right to:</p>
                <ul className="list-disc ml-5">
                    <li>Access the personal information we hold about you.</li>
                    <li>Request corrections if your information is inaccurate or incomplete.</li>
                    <li>Request deletion of your account and personal data (subject to legal requirements).</li>
                    <li>Withdraw consent for communications or data use at any time.</li>
                </ul>
                <p>
                    Requests can be made by contacting us (see Section 8).
                </p>
                <h2 className="my-5 text-3xl">
                    6. Cookies & Tracking
                </h2>
                <ul className="list-disc ml-5">
                    <li>
                        We may use cookies and similar technologies to improve user experience, analyse usage, and personalise content.
                    </li>
                    <li>
                        You can adjust your browser settings to refuse cookies, but this may affect site functionality.
                    </li>
                </ul>
                <h2 className="my-5 text-3xl">
                    7. Third-Party Links
                </h2>
                <p>
                    Our platform may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
                </p>
                <h2 className="my-5 text-3xl">
                    8. Contact Us
                </h2>
                <p>
                    For privacy enquiries, complaints, or requests:
                </p>
                <p>We will respond to all privacy complaints in accordance with the Australian Privacy Principles.</p>
                <h2 className="my-5 text-3xl">
                    9. Changes to this Policy
                </h2>
                <p>
                    We may update this Privacy Policy from time to time. Any updates will be posted on our website with a new “Effective Date.” Continued use of Insyncx after updates means you accept the revised policy.
                </p>
            </div>
        </PublicLayout>
    )
}
