'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { TalentTypeAcf } from '@/types';
import Filters from './Filters';
import { getTalents, getTalentsGraphQL } from '@/lib/api';

type TalentsListProps = {
    talentsList: any[];
};

const TalentsList = ({
    talentsList
}:TalentsListProps) => {
    const [filteredTalents, setFilteredTalents] = useState<any[]>(talentsList);

    return (
        <div className='pb-8 grid grid-cols-12 justify-around gap-6 pt-6 md:px-0 px-2 my-4 w-full relative'>
            <div className='grid sticky top-0 h-fit md:flex-col bg-white col-span-12 lg:col-span-3'>
                <Filters
                    talents={talentsList}
                    setFilteredTalents={setFilteredTalents}
                />
            </div>
            <div className='flex flex-col bg-white rounded-2xl border py-4 col-span-12 lg:col-span-9'>
                <h2 className='h-bold text-3xl font-semibold pb-4 pl-8 border-b mb-6'>
                    Talents
                </h2>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:px-8 px-2'>
                    {
                        filteredTalents.map((talent, index) => {
                            return(
                                <Link
                                    key={`${talent.id}-${talent.personalInformation.firstName}-${index}`}
                                    href={`/talents/${talent.id}`}
                                    className='hover:cursor-pointer group hover:bg-[#efefef] rounded-lg border-2 transition-all hover:border-primary'
                                >
                                    <div className='flex flex-col gap-1 p-4 lg:p-3 h-full justify-between'>
                                        <Image
                                            src={talent.personalInformation.profilePic ? talent.personalInformation.profilePic.node.sourceUrl : '/assets/images/profile-avatar.png'}
                                            alt={talent.personalInformation.firstName}
                                            width={200}
                                            height={200}
                                            className={'rounded-full w-40 h-40 border mx-auto mb-2 border-primary object-cover group-hover:border-2 group-hover:scale-105 transition-all'}
                                        />
                                        <p className='md:text-lg h-bold'>
                                            {talent.personalInformation.firstName}
                                        </p>
                                        <p className='md:text-lg capitalize'>
                                            {talent.professionalInformation.industries.map((item:any) => item.industry[0].replace(/_/g, ' ')).join(', ')}
                                        </p>

                                        <div className='flex justify-between mt-2'>
                                            <p className='text-green h-bold'>
                                                {talent.personalInformation.currentLocation.state}
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
