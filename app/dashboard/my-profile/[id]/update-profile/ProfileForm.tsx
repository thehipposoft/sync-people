'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TalentTypeAcf } from '@/types';

type Props = {
    userData: TalentTypeAcf;
};

const ProfileForm = ({
    userData,
}:Props) => {
    return (
        <div>
            <div className='flex flex-col md:w-full'>
                <div className='md:w-full flex justify-center gap-12 px-2 md:px-0'>
                    <div className='flex flex-col rounded-2xl my-4 md:w-[900px] w-full md:px-4 px-6 bg-white border'>
                        <div className='border-b'>
                            <h1 className='text-3xl h-bold py-3 pl-4'>
                                Update Profile
                            </h1>
                        </div>
                        <div className='flex md:gap-80 md:w-[850px] mx-auto'>
                            <div className='pt-4 md:pl-2'>
                                <Image src={'/assets/images/cv.png'} alt='Profile picture' width={160} height={160} className='ml-6 mt-4 md:w-[150px] w-36'/>
                            </div>
                            <div className='hidden flex-col gap-1 text-center items-center pt-8 pr-8'>
                                <Image src={'/assets/images/profileStrength.png'} alt='percentage of strength' width={140} height={120} />
                                <p className='h-bold'>Profile Strength</p>
                                <p>Want to stand out?</p>
                                <button className='text-[#326B88] border rounded-3xl border-[#326B88] md:px-6 px-2 py-1 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Go Premium!</button>
                            </div>
                        </div>

                        <form className='md:flex overflow-hidden'>

                        </form>
                        <div className='md:flex hidden gap-6 justify-center py-6'></div>
                        <div className='flex md:hidden justify-center my-8'>
                            <Link
                                href={'/my-profile'}
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

export default ProfileForm;
