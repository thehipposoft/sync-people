import Banner from '@/components/Banner';
import How from '@/components/How';
import DigitalPassport from '@/components/DigitalPassport';
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
                <div className="w-full pt-4 lg:pt-0">
                    <Banner />
                    <How />
                    <DigitalPassport />
                    <Categories />
                    <Companies />
                    <Discover />
                    <Contact />
                </div>
            </PublicLayout>
        </main>
    )
}
