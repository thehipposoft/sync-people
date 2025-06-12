import React from 'react';
import Image from 'next/image';
import FaqAccordion from './Accordion';

type Props = {
    faqsData: any;
}

const FaqsComp = ({faqsData}:Props) => {


    return (
        <div className='flex flex-col gap-12 md:gap-0 md:flex-row items-center md:items-start md:w-[1250px] w-[85vw] py-12 mx-auto justify-between'>
            <div className='flex flex-col gap-12'>
                <h1>FAQs</h1>
                <FaqAccordion items={faqsData} />
            </div>
            <div className='relative md:w-[450px] w-[85vw] h-[525px] '>
                <div className='absolute left-0 z-10 h-full w-full rounded-tl-[250px] bg-gradient-to-l opacity-30 rounded-br-[250px] from-[#8D78E0] to-[#15DFBB] ' />
                <Image src={'/assets/images/faqs.webp'} alt='' fill className='object-cover rounded-tl-[250px] rounded-br-[250px]'/>
            </div>
        </div>
    );
};

export default FaqsComp;
