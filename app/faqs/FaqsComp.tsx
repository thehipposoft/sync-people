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
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 justify-center my-8 px-10'>
            <div className='flex flex-col gap-12 col-span-1 lg:col-span-2'>
                <h1>FAQs</h1>
                <FaqAccordion items={faqsData} />
            </div>
            <div className='relative col-span-1 h-[23rem]'>
                <div className='absolute left-0 z-10 h-full w-full rounded-tl-[250px] bg-gradient-to-l opacity-30 rounded-br-[250px] from-[#8D78E0] to-[#15DFBB] ' />
                <Image
                    src={'/assets/images/faqs.webp'}
                    alt=''
                    fill
                    className='object-cover rounded-tl-[250px] rounded-br-[250px]'
                />
            </div>
        </div>
    );
};

export default FaqsComp;
