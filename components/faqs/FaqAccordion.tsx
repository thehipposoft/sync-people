'use client'
import React, { useState } from 'react'

type FaqItem = {
  title: string
  content: string
}

type FaqAccordionProps = {
  items: any
}

const FaqAccordion = ({ items }: FaqAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }
  return (
    <div className="flex flex-col gap-4">
      {items.map((item:any, index:number) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            onClick={() => toggleItem(index)}
            className="flex flex-col border rounded-3xl px-4 py-2 md:w-[510px] border-[#8D78E0] cursor-pointer transition-all duration-300"
          >
            <div className="flex justify-between items-center md:gap-4">
              <p className="md:text-base text-sm poppins font-semibold blue">
                {item.question}
              </p>
              <svg
                className={`duration-500 transform ${isOpen ? '' : 'rotate-180'}`}
                width="11"
                height="7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1.362.812-.938.938L5.674 7l5.25-5.25-.939-.938-4.311 4.31L1.362.813Z"
                  fill="#5F34F5"
                />
              </svg>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? 'opacity-100 max-h-[500px] translate-y-0 mt-2' : 'opacity-0 max-h-0 -translate-y-6'
              }`}
            >
              <p className="blue text-sm md:text-base">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FaqAccordion;
