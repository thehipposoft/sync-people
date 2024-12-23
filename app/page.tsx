import Banner from '@/components/Banner';
import How from '@/components/How';
import WhyUs from '@/components/WhyUs';
import Categories from '@/components/Categories';
import Companies from '@/components/Companies';
import Discover from '@/components/Discover';
import Contact from '@/components/Contact';
import PublicLayout from '@/components/PublicLayout';

export default async function Home() {
    return (
        <main className="relative w-full bg-white">
            <PublicLayout
                fullWith
            >
                <div className="w-full">
                    <Banner />
                    <How />
                    <WhyUs />
                    <Categories />
                    <Companies />
                    <Discover />
                    <Contact />
                </div>
            </PublicLayout>
        </main>
    )
}
