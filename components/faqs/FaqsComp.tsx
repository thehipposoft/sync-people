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
            <div className='relative md:w-[450px] w-[85vw] h-[550px]'>
                <Image src={'/assets/images/contact.png'} alt='' fill/>
            </div>
        </div>
    );
};

export default FaqsComp;
