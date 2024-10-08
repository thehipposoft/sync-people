import Header from '@/components/Header';
import Banner from '@/components/Banner';
import How from '@/components/How';
import WhyUs from '@/components/WhyUs';
import Categories from '@/components/Categories';
import Companies from '@/components/Companies';
import Discover from '@/components/Discover';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="relative">
            <Header isFixed />
            <Banner />
            <How />
            <WhyUs />
            <Categories />
            <Companies />
            <Discover />
            <Contact />
            <Footer />
        </main>
    )
}
