import FaqsComp from "@/app/faqs/FaqsComp";
import { getFaqs } from "@/lib/api";
import PublicLayout from "@/components/PublicLayout";

const FaqsPage = async () => {
    const faqsData = await getFaqs();
    return(
        <PublicLayout>
            <FaqsComp faqsData={faqsData.faqs} />
        </PublicLayout>
    )
}

export default FaqsPage;
