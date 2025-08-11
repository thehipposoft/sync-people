'use client'
import React from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { TalentTypeAcf } from '@/types';
import Filters from './Filters';

type TalentsListProps = {
    talentsList: TalentTypeAcf[];
};

const TalentsList = ({
    talentsList
}:TalentsListProps) => {
    return (
        <div className='pb-8 grid grid-cols-12 justify-around gap-6 pt-6 md:px-0 px-2 my-4 w-full relative'>
            <div className='grid sticky top-0 h-fit rounded-2xl border md:flex-col bg-white col-span-3'>
                <Filters />
            </div>
            <div className='flex flex-col bg-white rounded-2xl border py-4 col-span-12 lg:col-span-9'>
                <h2 className='h-bold text-black text-3xl font-semibold pb-4 pl-8 border-b mb-6'>
                    Talents
                </h2>
                <div className='grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-2 md:px-8 px-2'>
                    {
                        talentsList.map((talent, index) => {
                            return(
                                <Link
                                    key={`${talent.id}-${talent.personal_information.first_name}-${index}`}
                                    href={`/talents/${talent.id}`}
                                    className='hover:cursor-pointer group hover:bg-[#efefef] transition-all hover:border-primary-text'
                                >
                                    <div
                                        className='flex flex-col gap-1 my-4 md:my-0 border-2 rounded-lg p-4'
                                        key={`${talent.id}-${talent.personal_information.first_name}-${index}`}
                                    >
                                        <Image
                                            src={talent.personal_information.profile_pic ? talent.personal_information.profile_pic: '/assets/images/profile-avatar.png'}
                                            alt={talent.personal_information.first_name}
                                            width={200}
                                            height={200}
                                            className={'rounded-full w-40 h-40 border m-auto mb-2 border-primary-text object-cover'}
                                        />
                                        <p className='md:text-lg text-black h-bold'>
                                            {talent.personal_information.first_name}
                                        </p>
                                        <p className='md:text-lg capitalize'>
                                            {talent.professional_information.industries.map(industry => industry.industry).join(', ')}
                                        </p>

                                        <div className='flex justify-between mt-2'>
                                            <p className='text-green h-bold'>
                                                {talent.personal_information.current_location.state}
                                            </p>
                                            <p className='hidden md:flex text-right underline opacity-0 max-h-0 group-hover:max-h-fit group-hover:opacity-100 transition-all'>
                                                View Profile
                                            </p>
                                        </div>

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
