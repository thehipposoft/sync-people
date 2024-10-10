import FaqsComp from "@/components/faqs/FaqsComp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function FaqsPage() {
    return(
        <div>
            <Header isFixed={false}/>
                <FaqsComp />
            <Footer />
        </div>
    )
}
