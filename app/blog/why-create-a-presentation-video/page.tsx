import { Metadata } from "next";
import PublicLayout from "@/components/PublicLayout";

export const metadata: Metadata = {
    title: "Insyncx | Why Create a Presentation Video?",
    description: "Learn why creating a presentation video is essential for showcasing your skills and experience to potential employers.",
};

export default function PresentationVideo() {
    return (
        <PublicLayout>
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
