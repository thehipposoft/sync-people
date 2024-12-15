'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TalentTypeAcf } from '@/types';

type TalentsListProps = {
    talentsList: TalentTypeAcf[];
};

const TalentsList = ({
    talentsList
}:TalentsListProps) => {
    return (
        <div className='pb-8 flex flex-col md:flex-row justify-around gap-6 pt-6 md:px-0 px-2 my-4 w-full'>
            <div className='md:w-[20vw] rounded-2xl border flex md:flex-col bg-white'>
                <div className='grid col-span-1 '>
                    <div className='flex justify-between py-4 border-b mx-4'>
                        <p>Filters</p>
                        <p className='text-[#0095A9] cursor-pointer hover:underline'>Clear all</p>
                    </div>
                    <div className='py-4 border-b mx-4'>
                        <div className='flex justify-between items-center'>
                            <p className='h-bold text-xl'>Industry</p>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                            </svg>
                        </div>
                        <div className='flex flex-col gap-1 pt-3'>
                            <div className='flex items-center gap-2 '>
                                <label className='text-black'>
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="hospitality"
                                        className='mr-2'
                                    />
                                    Hospitality
                                </label>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <label className='text-black'>
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="construction"
                                        className='mr-2'
                                    />
                                    Tourism
                                </label>
                            </div>
                            <div className='flex items-center gap-2 '>

                                <label className='text-black'>
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="construction"
                                        className='mr-2'
                                    />
                                        Farming
                                </label>
                            </div>
                        </div>
                        <p className='text-[#0095A9] pt-2 cursor-pointer hover:underline'>See more</p>
                    </div>
                    <div className='py-4 border-b mx-4'>
                        <div className='flex justify-between items-center'>
                            <p className='h-bold text-xl'>Location</p>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                            </svg>
                        </div>
                        <div className='flex flex-col gap-1 pt-3'>
                            <div className='flex items-center gap-2 '>
                                <label className='text-black'>
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="hospitality"
                                        className='mr-2'
                                    />
                                    Melbourne & Inner Suburbs
                                </label>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <label className='text-black'>
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="construction"
                                        className='mr-2'
                                    />
                                    Melbourne, VIC 3000
                                </label>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <label className='text-black'>
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="construction"
                                        className='mr-2'
                                    />
                                    Geelong, VIC 3220
                                </label>
                            </div>
                        </div>
                        <p className='text-[#0095A9] pt-2 cursor-pointer hover:underline'>See more</p>
                    </div>

                    <div className='py-4 border-b mx-4'>
                        <div className='flex justify-between items-center'>
                            <p className='h-bold text-xl'>Salary Range ($/hour)</p>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                            </svg>
                        </div>
                        <div className='flex flex-col gap-1 pt-3'>
                            <div className='flex items-center gap-2 '>
                                $
                                <input type="number" />
                                to
                                <input type="number" />
                            </div>
                        </div>
                        <p className='text-[#0095A9] pt-2 cursor-pointer hover:underline'>See more</p>
                    </div>


                    <div className='py-4 border-b mx-4'>
                        <div className='flex justify-between items-center'>
                            <p className='h-bold text-xl'>Work Type</p>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                            </svg>
                        </div>
                        <div className='flex flex-col gap-1 pt-3'>
                            <div className='flex items-center gap-2 '>
                                <label className='text-black'>
                                    <input
                                        type="checkbox"
                                        name="work-type"
                                        value="full-time"
                                        className='mr-2'
                                    />
                                    Full-time
                                </label>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <label className='text-black'>
                                    <input
                                        type="checkbox"
                                        name="work-type"
                                        value="part-time"
                                        className='mr-2'
                                    />
                                    Part-time
                                </label>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <label className='text-black'>
                                    <input
                                        type="checkbox"
                                        name="work-type"
                                        value="casual"
                                        className='mr-2'
                                    />
                                    Casual
                                </label>
                            </div>
                        </div>
                        <p className='text-[#0095A9] pt-2 cursor-pointer hover:underline'>See more</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-white rounded-2xl border py-4 flex-grow'>
                <h2 className='h-bold text-black text-3xl font-semibold pb-4 pl-8 border-b mb-6'>
                    Talents
                </h2>
                <div className='grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-2 md:px-8 px-2'>
                    {
                        talentsList.map((talent, index) => {
                            return(
                                <Link
                                    href={`/talents/${talent.id}`}
                                    className='hover:cursor-pointer group hover:bg-[#efefef] transition-all'
                                >
                                    <div
                                        className='flex flex-col gap-1 my-4 md:my-0 border-2 rounded-lg p-2'
                                        key={`${talent.id}-${talent.personal_information.first_name}-${index}`}
                                    >
                                        <Image
                                            src={talent.personal_information.profile_pic ? talent.personal_information.profile_pic: '/assets/images/profile-avatar.png'}
                                            alt={talent.personal_information.first_name}
                                            width={200}
                                            height={200}
                                            className={'rounded-full w-40 h-40 border m-auto mb-2 border-primary-text object-cover'}
                                        />
                                        <p className='md:text-lg text-black h-bold search-name'>
                                            {talent.personal_information.first_name}
                                        </p>
                                        <p className='md:text-lg search-name'>
                                            {talent.professional_information.industries.map(industry => industry.industry).join(', ')}
                                        </p>

                                        <p className='text-green h-bold'>
                                            {talent.current_location.state}
                                        </p>
                                        <p className='hidden md:flex text-right underline opacity-0 max-h-0 group-hover:max-h-fit group-hover:opacity-100 group-hover:mt-4 transition-all'>
                                            View Profile
                                        </p>
                                        <span className='primary-btn md:hidden text-sm'>
                                            View Profile
                                        </span>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default TalentsList;
