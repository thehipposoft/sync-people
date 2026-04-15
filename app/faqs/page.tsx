import type { Metadata } from 'next';
import FaqsComp from "@/app/faqs/FaqsComp";
import { getFaqs } from "@/lib/api";
import PublicLayout from "@/components/PublicLayout";

export const metadata: Metadata = {
    title: "FAQ | Insyncx - Frequently Asked Questions",
    description: "Find answers to common questions about Insyncx. Learn how our digital portfolio works, how to connect with employers in Australia, and how backpackers, students, and skilled workers can showcase their talents.",
    alternates: {
        canonical: "https://insyncx.com/faqs",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "FAQ | Insyncx - Frequently Asked Questions",
        description: "Get answers about Insyncx’s digital portfolio, job opportunities for backpackers and students in Australia, and how employers can connect with talent.",
        url: "https://insyncx.com/faqs",
        siteName: "Insyncx",
        images: [
        {
            url: "https://insyncx.com/assets/og-image.png",
            width: 1200,
            height: 630,
            alt: "Insyncx FAQ page",
        },
        ],
        locale: "en_AU",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "FAQ | Insyncx - Frequently Asked Questions",
        description: "Get answers about Insyncx’s digital portfolio, job opportunities for backpackers and students in Australia, and how employers can connect with talent.",
        images: ["https://insyncx.com/assets/og-image.png"],
    },
}

const FaqsPage = async () => {
    const faqsData = await getFaqs();
    const faqs = faqsData?.faqs ?? [];

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq: { question: string; answer: string }) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer?.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim(),
            },
        })),
    };

    return(
        <PublicLayout>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <FaqsComp faqsData={faqs} />
        </PublicLayout>
    )
}

export default FaqsPage;
