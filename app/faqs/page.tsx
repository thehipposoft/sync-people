import FaqsComp from "@/components/faqs/FaqsComp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getFaqs } from "@/lib/api";

const FaqsPage = async () => {
    const faqsData = await getFaqs();
    return(
        <div>
            <Header isFixed={false}/>
                <FaqsComp faqsData={faqsData.faqs} />
            <Footer />
        </div>
    )
}

export default FaqsPage;
