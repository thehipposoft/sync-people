'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_FORMSLIDES } from './FormSlider/constants';

const BusinessCreateProfile = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    function showNext() {
        setCurrentIndex((index) => {
            if (index === BUSINESS_FORMSLIDES.length - 1) return 0;
            return index + 1;
        })
    }

    function showPrev() {
        setCurrentIndex((index) => {
            if (index === 0) return BUSINESS_FORMSLIDES.length - 1;
            return index - 1;
        })
    }


    return (
        <div>
            <div className='flex flex-col md:w-full'>
                <div className='flex items-center justify-between px-4 py-4 w-full h-16'>
                    <Link href={'/'} className='relative h-20 w-[180px]'>
                        <Image src={'/assets/logo.svg'} alt='Synto logo' fill />
                    </Link>
                    <div className='flex md:justify-end gap-6 py-1'>
                        <Link
                            href={'/staff-market'}
                            className='flex items-center text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'
                        >
                            Search Staff
                        </Link>
                        <div className='relative rounded-full w-[40px] h-[40px]'>
                            <Image src={"/assets/images/business/mylk-logo.png"} alt='' fill/>
                        </div>
                    </div>
                </div>
                <div className='bg-[#FAFAFB] w-full flex justify-center gap-12'>
                    <div className='flex flex-col rounded-2xl my-4 md:w-[900px] px-4 bg-white border'>
                        <div className='border-b'>
                            <h1 className='text-3xl h-bold py-3 pl-4'>Create profile</h1>
                        </div>
                        <form className='md:flex overflow-hidden'>
                            {
                                BUSINESS_FORMSLIDES.map((val, index) => {
                                    return(
                                        <div
                                        className={` flex-col duration-1000 md:min-w-[850px] md:px-4 py-6 md:py-0`}
                                        key={index}
                                        style={{
                                            translate: `${-100 * currentIndex}%`,
                                        }}
                                        >
                                            {val.content}
                                        </div>
                                    )
                                })
                            }
                        </form>
                        <div className='md:flex hidden justify-center mt-6'>{currentIndex + 1} | {BUSINESS_FORMSLIDES.length}</div>
                        <div className='md:flex hidden gap-6 justify-center py-6'>
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
                                currentIndex != BUSINESS_FORMSLIDES.length - 1 ?
                                <button
                                    className='text-[#FF8149] py-2 px-4 rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                                    onClick={showNext}
                                >
                                    Next
                                </button>
                                :
                                <Link
                                    href={'/business-profile'}
                                    className='text-[#326B88] py-2 px-4 border-[#326B88] border rounded-3xl hover:bg-[#326B88] hover:text-white duration-700 cursor-pointer'
                                >
                                    Finish
                                </Link>

                            }
                        </div>
                        <div className='flex md:hidden justify-center my-8'>
                            <Link
                                href={'/business-profile'}
                                className='text-[#326B88] py-2 px-4 border-[#326B88] border rounded-3xl hover:bg-[#326B88] hover:text-white duration-700 cursor-pointer'
                            >
                                Finish
                            </Link>
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
            </div>

        </div>
    );
};

export default BusinessCreateProfile;
