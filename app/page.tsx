
import Banner from '@/components/Banner';
import HowWorks from '@/components/How';
import DigitalPassport from '@/components/DigitalPassport';
import Categories from '@/components/Categories';
import Discover from '@/components/Discover';
import Contact from '@/components/Contact';
import PublicLayout from '@/components/PublicLayout';

export const metadata = {
    title: "Insyncx | Connect Talents with Opportunities in Australia",
    description: "Insyncx helps backpackers, students, and skilled workers in Australia showcase their talents with a digital passport and connect with employers across hospitality, tourism, and more.",
    openGraph: {
        title: "Insyncx | Connect Talents with Opportunities in Australia",
        description: "Build your digital portfolio, get discovered, and find work opportunities in Australia.",
        url: "https://insyncx.com",
        siteName: "Insyncx",
        images: [
        {
            url: "/assets/og-image.png",
            width: 1200,
            height: 630,
            alt: "Insyncx digital portfolio",
        },
        ],
        locale: "en_AU",
        type: "website",
    },
}

export default async function Home() {
    return (
        <PublicLayout
            fullWith
        >
            <div className="w-full pt-4 md:pt-0">
                <Banner />
                <HowWorks />
                <DigitalPassport />
                <Categories />
                <Discover />
                <Contact />
            </div>
        </PublicLayout>
    )
}
