import React from 'react';
import Accordion from './accordion';
import Image from 'next/image';

const FaqsComp = () => {

    const items = [
        { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', content: 'Content for Item 1' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', content: 'Content for Item 2' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', content: 'Content for Item 3' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', content: 'Content for Item 4' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', content: 'Content for Item 5' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', content: 'Content for Item 6' },
      ];


    return (
        <div className='flex flex-col gap-12 md:gap-0 md:flex-row items-center md:w-[1250px] w-[85vw] py-12 mx-auto justify-between'>
            <div>
                <h1>FAQs</h1>
                <div>
                    <Accordion items={items} />
                </div>
            </div>
            <div className='relative md:w-[450px] w-[85vw] h-[525px] '>
                <div className='absolute left-0 z-10 h-full w-full rounded-tl-[250px] bg-gradient-to-l opacity-30 rounded-br-[250px] from-[#8D78E0] to-[#15DFBB] ' />
                <Image src={'/assets/images/faqs.webp'} alt='' fill className='object-cover rounded-tl-[250px] rounded-br-[250px]'/>
            </div>
        </div>
    );
};

export default FaqsComp;
