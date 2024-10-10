'use client'
import React, { useState } from 'react';

type IndexType = {
    index: number
}

const AccordionItem = ({ title, content, isOpen, onToggle }:any) => (
    <div
        onClick={onToggle}
        className='flex flex-col border rounded-3xl px-4 py-2 md:w-[510px] border-[#8D78E0] cursor-pointer' >
        <div
            className="flex justify-between items-center md:gap-4"
        >
            <p className="md:text-base text-sm poppins font-semibold blue">{title}</p>
            <svg className={`duration-500 ${isOpen ? '' : 'rotate-180'}`} width="11" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.362.812-.938.938L5.674 7l5.25-5.25-.939-.938-4.311 4.31L1.362.813Z" fill="#5F34F5"/></svg>
        </div>
        <p className={`${isOpen ? 'opacity-100' : 'opacity-0 hidden -translate-y-12'} blue`}>{content}</p>
    </div>
);

const Accordion = ({ items }:any) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: React.SetStateAction<number>) => {
    setOpenIndex(openIndex === index ? openIndex : index);
  };

  return (
    <div className="w-full flex flex-col gap-2 max-w-md mx-auto mt-10">
      {
        items.map((item:any, index:any) => (
            <div>
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            </div>

        ))
      }
    </div>
  );
};

export default Accordion
