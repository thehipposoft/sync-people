'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { TalentTypeAcf } from '@/types';
//Form steps
import BasicInformation from './BasicInformation';
import Industries from './Industries';
import WorkingRights from './WorkingRights';
import Extras from './Extras';

type MyProfileProps = {
    user: TalentTypeAcf;
    userId: string;
}

const TalentForm = ({
    user,
    userId,
}:MyProfileProps) => {
    const [formValues, setFormValues] = useState<TalentTypeAcf>({
        ...user,
    });
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    function showNext() {
        setCurrentIndex((index) => {
            if (index === 4) return 0;
            return index + 1;
        })
    }

    function showPrev() {
        setCurrentIndex((index) => {
            if (index === 0)
                return 3;

            return index - 1;
        })
    }

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>,
        section: 'personal_information' | 'professional_information' | 'working_rights' | 'current_location' | 'extras' | 'work_experience',
        field: string
    ) => {
        const { value } = e.target;

        setFormValues({
            ...formValues,
            [section]: {
                ...formValues[section],
                [field]: value,
            },
        });
    };

    return (
        <div>
            <div className='flex flex-col md:w-full'>
                <div className='md:w-full flex justify-center gap-12 px-2 md:px-0'>
                    <div className='flex flex-col rounded-2xl my-4 md:w-[900px] w-full md:px-4 px-6 bg-white border'>
                        <div className='border-b'>
                            <h1 className='text-3xl h-bold py-3 pl-4'>Create Talent Profile</h1>
                        </div>
                        <form className='md:flex flex-col'>
                            <div className='flex md:gap-80 md:w-[850px] mx-auto'>
                                <div className='pt-4 md:pl-2 group relative'>
                                    <Image
                                        src={user.personal_information.profile_pic ? user.personal_information.profile_pic : '/assets/images/profile-avatar.png'}
                                        alt='Profile picture'
                                        width={160}
                                        height={160}
                                        className='ml-6 mt-4 md:w-40 md:h-40 rounded-full object-cover'
                                    />
                                    <div className='w-40 h-40 rounded-full opacity-0 bg-[#00000033] group-hover:opacity-100 duration-500 absolute top-0 left-0 flex justify-center items-center'>
                                        <h4 className='text-md'>Change profile image</h4>
                                    </div>
                                </div>
                                <div className='mt-20 flex-col gap-2 items-end hidden md:block'>
                                    {
                                        currentIndex === 0 ?
                                        <div>
                                            <p className='text-[#FF8149] text-lg pb-2'>10% completed</p>
                                            <div className='bg-gradient-to-r from-[#FF8149] to-[#7087E5] h-[30px] w-[60px] rounded-3xl duration-500' />
                                        </div>
                                        :
                                        currentIndex === 1 ?
                                        <div>
                                            <p className='text-[#FF8149] text-lg pb-2'>40% completed</p>
                                            <div className='bg-gradient-to-r from-[#FF8149] to-[#7087E5] h-[30px] w-[120px] rounded-3xl duration-500' />
                                        </div>
                                        :
                                        currentIndex === 2 ?
                                        <div>
                                            <p className='text-[#7087E5] text-lg pb-2'>60% completed</p>
                                            <div className='bg-gradient-to-r from-[#FF8149] via-[#7087E5] to-[#3EC1AA] h-[30px] w-[180px] rounded-3xl duration-500' />
                                        </div>
                                        :
                                        currentIndex === 3 ?
                                        <div>
                                            <p className='text-[#3EC1AA] text-lg pb-2'>90% completed</p>
                                            <div className='bg-gradient-to-r from-[#FF8149] via-[#7087E5] to-[#3EC1AA] h-[30px] w-[240px] rounded-3xl duration-500' />
                                        </div>
                                        : ''
                                    }
                                </div>
                                <div className='hidden flex-col gap-1 text-center items-center pt-8 pr-8'>
                                    <Image src={'/assets/images/profileStrength.png'} alt='percentage of strength' width={140} height={120} />
                                    <p className='h-bold'>Profile Strength</p>
                                    <p>Want to stand out?</p>
                                    <button className='text-[#326B88] border rounded-3xl border-[#326B88] md:px-6 px-2 py-1 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Go Premium!</button>
                                </div>
                            </div>
                            <div className='md:flex overflow-hidden'>
                                <BasicInformation
                                    currentIndex={currentIndex}
                                    isVisible={currentIndex === 0}
                                    formValues={formValues}
                                    handleInputChange={handleInputChange}
                                />
                                <Industries currentIndex={currentIndex} isVisible={currentIndex === 1} />
                                <WorkingRights currentIndex={currentIndex} isVisible={currentIndex === 2} />
                                <Extras currentIndex={currentIndex} isVisible={currentIndex === 3} />
                            </div>
                        </form>
                        <div className='md:flex hidden justify-center mt-6'>
                            {currentIndex + 1} | 4
                        </div>
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
                                currentIndex != 3 ?
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

export default TalentForm;
