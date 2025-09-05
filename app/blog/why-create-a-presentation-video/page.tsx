import { Metadata } from "next";
import PublicLayout from "@/components/PublicLayout";

export const metadata: Metadata = {
    title: "Why Create a Presentation Video? | Insyncx",
    description: "Discover why creating a presentation video can boost your chances of finding opportunities. Learn how a short video helps talents stand out and connect with employers on Insyncx.",
    openGraph: {
        title: "Why Create a Presentation Video? | Insyncx",
        description: "A presentation video is your chance to make a great first impression. See why it matters and how it helps you connect with opportunities on Insyncx.",
        url: "https://insyncx.com/blog/why-create-a-presentation-video",
        siteName: "Insyncx",
        images: [
        {
            url: "/assets/og-image.png", // add in /public
            width: 1200,
            height: 630,
            alt: "Why Create a Presentation Video",
        },
        ],
        locale: "en_AU",
        type: "article",
    },
}

export default function PresentationVideo() {
    return (
        <PublicLayout>
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Why Create a Presentation Video?",
                "description": "Learn why a presentation video is powerful for talents on Insyncx. A short video helps showcase personality, communication skills, and connect with employers.",
                "author": {
                    "@type": "Organization",
                    "name": "Insyncx"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Insyncx",
                    "logo": {
                    "@type": "ImageObject",
                    "url": "https://insyncx.com/logo.png"
                    }
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://insyncx.com/blog/why-create-a-presentation-video"
                },
                "datePublished": "2025-08-30",
                "dateModified": "2025-08-30",
                "inLanguage": "en-AU"
            })}
            <div className="my-20 flex flex-col md:flex-row gap-16 max-w-[80vw] md:max-w-none">
                <div>
                    <h1 className="md:text-5xl mb-10">
                        Why Create a Presentation Video?
                    </h1>

                    <h2 className="text-lg h-bold">
                        Showcase Your Skills and Experience
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        A presentation video allows you to showcase your skills, experience, and personality
                        in a dynamic and engaging way. It provides potential employers with a glimpse of
                        your communication style, professionalism, and expertise, helping you stand out
                        from other candidates.
                    </p>

                    <h2 className="text-lg h-bold">
                        Personalized Introduction
                    </h2>
                    <p className="mt-2 mb-8 text-[#798196]">
                        A presentation video gives you the opportunity to introduce yourself in a personalized
                        and memorable way. You can highlight your unique qualities, achievements, and career
                        goals, creating a lasting impression on recruiters and hiring managers.
                    </p>

                    <h2 className="text-lg h-bold">
                        Demonstrate Your Communication Skills
                    </h2>

                    <p className="mt-2 mb-8 text-[#798196]">
                        Effective communication is a key skill in any industry, and a presentation video
                        allows you to demonstrate your ability to articulate your thoughts clearly and
                        concisely. By showcasing your communication skills, you can build credibility
                        and trust with potential employers.
                    </p>

                    <h2 className="text-lg h-bold mb-3">
                        Example
                    </h2>
                    <iframe
                        width="560" height="315"
                        src="https://www.youtube.com/embed/0_6AK52kSVQ?si=dxSS_IdbvgfXTMg2"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>
        </PublicLayout>
    );
}
