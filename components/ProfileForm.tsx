'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import { FORM_SLIDES } from './FormSlider/constants';
import FormSlider from './FormSlider';

const ProfileForm = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    function showNext() {
        setCurrentIndex((index) => {
            if (index === FORM_SLIDES.length - 1) return 0;
            return index + 1;
        })
    }

    function showPrev() {
        setCurrentIndex((index) => {
            if (index === 0) return FORM_SLIDES.length - 1;
            return index - 1;
        })
    }

    return (
        <div className=''>
            <div className='flex flex-col md:w-full'>
                <div className='flex justify-between px-4 py-2 w-full h-16'>
                    <Link href={'/'}>
                        <Image src={'/assets/logo.svg'} alt='Synto logo' width={180} height={140} />
                    </Link>
                    <div className='flex justify-end gap-6 py-1'>
                        <button className='text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Training and Licenses</button>
                        <button className='text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Search Jobs</button>
                        <img src="/assets/images/cv.png" alt="Profile picture" className='rounded-full' />
                    </div>
                </div>
                <div className='bg-[#FAFAFB] w-full flex justify-center gap-12'>
                    <div className='flex flex-col rounded-2xl my-4 md:w-[900px] px-4 bg-white border'>
                        <div className='border-b'>
                            <h1 className='text-3xl h-bold py-3 pl-4'>Create profile</h1>
                        </div>
                        <div className='flex justify-between'>
                            <div className='pt-4 pl-2'>
                                <h2 className='pl-4 h-bold text-xl'>General information</h2>
                                <Image src={'/assets/images/cv.png'} alt='Profile picture' width={160} height={160} className='ml-6 mt-4'/>
                            </div>
                            <div className='flex flex-col gap-1 text-center items-center pt-4 pr-8'>
                                <Image src={'/assets/images/profileStrength.png'} alt='percentage of strength' width={140} height={120} />
                                <p className='h-bold'>Profile Strength</p>
                                <p>Want to stand out?</p>
                                <button className='text-[#326B88] border rounded-3xl border-[#326B88] px-6 py-1 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Go Premium!</button>
                            </div>
                        </div>
                        <div className='mt-12 flex flex-col gap-2 items-end pr-14'>
                            {
                                currentIndex === 0 ?
                                <div>
                                    <p className='text-[#FF8149] text-lg pb-2'>25% completed</p>
                                    <div className='bg-gradient-to-r from-[#FF8149] to-[#7087E5] h-[30px] w-[70px] rounded-3xl' />
                                </div>
                                :
                                currentIndex === 1 ?
                                <div>
                                    <p className='text-[#FF8149] text-lg pb-2'>50% completed</p>
                                    <div className='bg-gradient-to-r from-[#FF8149] to-[#7087E5] h-[30px] w-[120px] rounded-3xl' />
                                </div>
                                :
                                currentIndex === 2 ?
                                <div>
                                    <p className='text-[#7087E5] text-lg pb-2'>75% completed</p>
                                    <div className='bg-gradient-to-r from-[#FF8149] via-[#7087E5] to-[#3EC1AA] h-[30px] w-[180px] rounded-3xl' />
                                </div>
                                :
                                currentIndex === 3 ?
                                <div>
                                    <p className='text-[#3EC1AA] text-lg pb-2'>100% completed</p>
                                    <div className='bg-gradient-to-r from-[#FF8149] via-[#7087E5] to-[#3EC1AA] h-[30px] w-[190px] rounded-3xl' />
                                </div>
                                : ''
                            }

                        </div>
                        <div className='flex overflow-hidden '>
                            {
                                FORM_SLIDES.map((val, index) => {
                                    return(
                                        <div
                                            className='flex flex-col duration-700 min-w-[900px] px-4'
                                            key={index}
                                            style={{
                                                translate: `${-100 * currentIndex}%`,
                                            }}
                                        >
                                            <div className='flex items-center pt-4'>
                                                <Image src={'/assets/images/vectors/education.svg'} alt='' width={35} height={30}/>
                                                <h4 className='font-bold pl-4 text-xl'>{val.title}</h4>
                                            </div>
                                            <span className='blue text-4xl pt-2'>{val.subtitle}</span>
                                            <p className='pb-4'>{val.description}</p>
                                                {val.content}
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className='flex gap-6 justify-center py-6'>
                            {
                                currentIndex != 0 ?
                                <button 
                                    className='text-[#FF8149] py-2 px-4 rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                                    onClick={showPrev}
                                >
                                    Back
                                </button>
                                : ''
                            }
                            {
                                currentIndex != FORM_SLIDES.length - 1 ?
                                <button 
                                    className='text-[#FF8149] py-2 px-4 rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                                    onClick={showNext}
                                >
                                    Next
                                </button>
                                :
                                <Link href={'/my-profile'}>
                                    <button
                                        className='text-[#326B88] py-2 px-4 border-[#326B88] border rounded-3xl hover:bg-[#326B88] hover:text-white duration-700 cursor-pointer'
                                    >
                                        Finish
                                    </button>
                                </Link>

                            }

                        </div>
                    </div>
                    <div className='flex flex-col my-4 gap-4'>
                        <Image src={'/assets/images/publicity/ads-1.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-2.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-3.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-4.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-5.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-6.png'} alt='' width={200} height={150} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;