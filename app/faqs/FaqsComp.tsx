import Image from 'next/image';
import FaqAccordion from './FaqAccordion';

type Props = {
    faqsData: {
        question: string;
        answer: string;
    }[];
}

const FaqsComp = ({
    faqsData
}:Props) => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 justify-center my-8 px-6 md:px-10 w-full'>
            <div className='flex flex-col gap-12 col-span-1 lg:col-span-2'>
                <h1>FAQs</h1>
                <FaqAccordion items={faqsData} />
            </div>
            <div className='relative col-span-1 h-[23rem]'>
                <div className='absolute left-0 z-10 h-full w-full rounded-tl-[250px] bg-gradient-to-l opacity-30 rounded-br-[250px] from-[#8D78E0] to-[#15DFBB] ' />
                <Image
                    src={'/assets/images/faqs.webp'}
                    alt='Team member answering common questions about Insyncx'
                    fill
                    className='object-cover rounded-tl-[250px] rounded-br-[250px]'
                />
            </div>
        </section>
    );
};

export default FaqsComp;
