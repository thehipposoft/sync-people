'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TalentType, IndustryType } from '@/types';

type TalentProfileProps = {
    talentData: TalentType;
};

const TalentProfile = ({
    talentData,
}:TalentProfileProps) => {
    const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>(talentData.acf.professional_information.industries[0]);

    return (
        <div className='flex flex-col md:w-full'>
            <div className='bg-white md:w-full w-[80vw] mx-auto md:mx-0 md:flex justify-center gap-12 my-8'>
                <div className='border rounded-2xl'>
                    <div className='relative flex flex-col mx-auto md:w-[900px] bg-white'>
                        <div className='relative h-[200px] md:w-[900px] w-[80vw]'>
                            <Image
                                src={talentData.acf.extras.profile_header_image}
                                alt={`Banner for ${talentData.acf.personal_information.first_name}`}
                                fill
                                className='object-cover rounded-t-2xl'
                            />
                        </div>
                        <div className='relative flex flex-col justify-between md:px-12 px-6 py-6'>
                            <div>
                                <Image
                                    src={talentData.acf.personal_information.profile_pic}
                                    alt={`Profile picture for ${talentData.acf.personal_information.first_name}`}
                                    width={140}
                                    height={140}
                                    className='rounded-full border-[6px] border-white absolute -top-14'
                                />
                                <select
                                    className='bg-[#f3f4f6] rounded-lg p-2 w-[200px] md:w-[200px] text-[#1A335D] text-center ml-auto flex'
                                    onChange={(e) => {
                                        const selected = talentData.acf.professional_information.industries.find((industry) => industry.rol === e.target.value);
                                        if (selected) {
                                            setSelectedIndustry(selected);
                                        }
                                    }}
                                >
                                    {talentData.acf.professional_information.industries.map((industry, index) => (
                                        <option
                                            key={index}
                                            value={industry.rol}
                                            onClick={() => setSelectedIndustry(industry)}
                                        >
                                           {industry.industry.toUpperCase()}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 mt-20'>
                                <h2 className='text-2xl'>
                                    {talentData.acf.personal_information.first_name} <span className='h-bold capitalize'>{talentData.acf.personal_information.last_name} - {selectedIndustry.rol}</span>
                                </h2>

                                <div className='flex justify-between'>
                                    <div>
                                        <p className='text-[#1A335D]'>
                                            {talentData.acf.working_rights.current_visa.label}
                                        </p>
                                        <p className='text-[#1A335D]'>
                                            {talentData.acf.personal_information.country}
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className='text-lg'>
                                            Preferred Salary
                                        </h2>
                                        <div className={`flex gap-2`}>
                                            ${selectedIndustry.preferred_salary} aud per Hour
                                        </div>
                                        <div className={`flex gap-2 hidden`}>
                                            <Link
                                                href={`tel:${talentData.acf.personal_information.mobile}`}
                                                className='text-[#1A335D] underline flex gap-3'
                                            >
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.8359 11.8754L11.0008 13.6857C10.0438 13.1086 9.15474 12.4258 8.35047 11.6499C7.57582 10.8443 6.89306 9.95516 6.31475 8.99879L8.12332 7.16365C8.23286 7.05242 8.30683 6.91112 8.33583 6.75772C8.36484 6.60432 8.34755 6.44577 8.28618 6.30222L6.40047 1.9068C6.32597 1.73348 6.19169 1.5927 6.02208 1.5101C5.85248 1.4275 5.65885 1.40858 5.47647 1.4568L2.01875 2.37137C1.84608 2.41613 1.69371 2.51818 1.58658 2.66081C1.47946 2.80344 1.42391 2.9782 1.42904 3.15651C1.64904 7.17803 3.32114 10.983 6.13475 13.8648C9.01705 16.6793 12.8231 18.3517 16.8456 18.5714C17.0241 18.5774 17.1993 18.5223 17.3422 18.4152C17.4851 18.3081 17.5872 18.1555 17.6316 17.9825L18.5453 14.5231C18.5938 14.3408 18.5751 14.1472 18.4926 13.9775C18.4102 13.8079 18.2695 13.6736 18.0962 13.5991L13.6999 11.7142C13.5562 11.652 13.3972 11.634 13.2433 11.6627C13.0893 11.6915 12.9475 11.7655 12.8359 11.8754Z" stroke="#326B88" strokeWidth="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                                                </svg>
                                                {talentData.acf.personal_information.mobile}
                                            </Link>
                                        </div>
                                        <div className={`flex gap-2 hidden`}>
                                            <Link
                                                href={`mailto:${talentData.acf.personal_information.email}`}
                                                className='text-[#1A335D] underline flex gap-2'
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.9999 15.4284C13.8934 15.4284 15.4284 13.8934 15.4284 11.9999C15.4284 10.1063 13.8934 8.57129 11.9999 8.57129C10.1063 8.57129 8.57129 10.1063 8.57129 11.9999C8.57129 13.8934 10.1063 15.4284 11.9999 15.4284Z" stroke="#326B88" strokeWidth="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                                                    <path d="M15.4287 19.8579C13.7371 20.5962 11.8524 20.7687 10.0549 20.3499C8.25743 19.931 6.64313 18.9432 5.45214 17.5332C4.26114 16.1232 3.55707 14.3665 3.44464 12.5242C3.3322 10.682 3.81741 8.85269 4.82811 7.30835C5.8388 5.76401 7.32098 4.58716 9.05421 3.95282C10.7874 3.31848 12.6791 3.26053 14.4479 3.78761C16.2167 4.31469 17.7682 5.39862 18.8715 6.87821C19.9748 8.35779 20.571 10.154 20.5716 11.9997V12.8568C20.5716 13.5388 20.3007 14.1928 19.8184 14.6751C19.3362 15.1573 18.6821 15.4282 18.0001 15.4282C17.3182 15.4282 16.6641 15.1573 16.1819 14.6751C15.6996 14.1928 15.4287 13.5388 15.4287 12.8568V8.57108" stroke="#326B88" strokeWidth="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                                                </svg>
                                                <p className='text-[#1A335D]'>
                                                    {talentData.acf.personal_information.email}
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-4 pt-4 '>
                                    <div>
                                        <h2 className='text-lg'>Industries of Preference</h2>
                                        <p>Hospitality, Cleaning</p>
                                    </div>
                                    <div>
                                        <h2 className='text-lg'>Languages</h2>
                                        <p>English, French, Spanish</p>
                                    </div>
                                    <div>
                                        <h2 className='text-lg'>Licences</h2>
                                        <p>RSA, Drivers's Licence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:px-12 px-6 pb-6'>
                            <h3 className='text-lg h-bold'>About Diana</h3>
                            <p>Ex consectetur veniam eiusmod in laboris aliquip exercitation eu culpa elit laborum laboris consectetur incididunt dolor. Sit nostrud reprehenderit adipisicing officia anim dolor cupidatat veniam eiusmod. Veniam aute mollit irure dolor id eu quis irure sint. Aliqua ullamco elit laboris eu aliquip.</p>
                        </div>
                    </div>
                    <div className='flex flex-col  my-4 mx-auto md:w-[900px] bg-white md:px-12 px-6 py-6 border-t'>
                        <div className='flex justify-between'>
                            <h2 className='text-xl'>Work Experience</h2>
                            <button className='rounded-lg p-2 bg-[#f3f4f6]'>Sort by: Newest</button>
                        </div>
                        <div className='flex flex-col pt-4'>
                            <h2 className='text-xl'>Barista</h2>
                            <p className='opacity-70'>Joe's Cafe</p>
                            <p className='opacity-70'>Apr 2022 - Dic 2023</p>
                            <p className='opacity-70'>Surfers Paradise, QLD 4217</p>
                            <p>Aliqua id aliquip pariatur veniam veniam voluptate id adipisicing Lorem labore pariatur aute anim proident non. Pariatur mollit enim do nostrud aliqua id do ex aliquip est occaecat laboris velit exercitation culpa exercitation pariatur id voluptate.</p>
                        </div>
                    </div>
                </div>

                <div className='hidden flex-col my-4 gap-4'>
                    <Image src={'/assets/images/publicity/ads-1.png'} alt='' width={200} height={150} />
                    <Image src={'/assets/images/publicity/ads-2.png'} alt='' width={200} height={150} />
                    <Image src={'/assets/images/publicity/ads-3.png'} alt='' width={200} height={150} />
                    <Image src={'/assets/images/publicity/ads-4.png'} alt='' width={200} height={150} />
                    <Image src={'/assets/images/publicity/ads-5.png'} alt='' width={200} height={150} />
                    <Image src={'/assets/images/publicity/ads-6.png'} alt='' width={200} height={150} />
                </div>
            </div>
            <div className='flex mb-8 pb-8 justify-end flex-wrap gap-4 md:gap-6 md:mb-0 w-[80vw] md:w-[900px] mx-auto'>
                <button
                    className='secondary-btn w-fit md:w-auto px-8'
                >
                    Download Profile
                </button>
            </div>
        </div>
    );
};

export default TalentProfile;
