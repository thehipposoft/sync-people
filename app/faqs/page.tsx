import FaqsComp from "@/app/faqs/FaqsComp";
import { getFaqs } from "@/lib/api";
import PublicLayout from "@/components/PublicLayout";

export const metadata = {
    title: "FAQ | Insyncx - Frequently Asked Questions",
    description: "Find answers to common questions about Insyncx. Learn how our digital portfolio works, how to connect with employers in Australia, and how backpackers, students, and skilled workers can showcase their talents.",
    openGraph: {
        title: "FAQ | Insyncx - Frequently Asked Questions",
        description: "Get answers about Insyncx’s digital portfolio, job opportunities for backpackers and students in Australia, and how employers can connect with talent.",
        url: "https://insyncx.com/faq",
        siteName: "Insyncx",
        images: [
        {
            url: "/assets/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Insyncx FAQ page",
        },
        ],
        locale: "en_AU",
        type: "website",
    },
}

const FaqsPage = async () => {
    const faqsData = await getFaqs();



    return(
        <PublicLayout>
            <FaqsComp faqsData={faqsData.faqs} />
        </PublicLayout>
    )
}

export default FaqsPage;
