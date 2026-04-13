'use client'
import { useMemo, useState } from 'react';
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
    const [filteredTalents, setFilteredTalents] = useState<TalentTypeAcf[]>(talentsList);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const visibleTalents = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();

        if (!normalizedQuery) {
            return filteredTalents;
        }

        return filteredTalents.filter((talent) => {
            const firstName = talent.personal_information.first_name?.toLowerCase() || '';
            const lastName = talent.personal_information.last_name?.toLowerCase() || '';
            const location = talent.personal_information.current_location?.state?.toLowerCase() || '';
            const industries = talent.professional_information.industries
                .map((industry) => industry.industry.replace(/_/g, ' ').toLowerCase())
                .join(' ');

            return `${firstName} ${lastName}`.includes(normalizedQuery)
                || location.includes(normalizedQuery)
                || industries.includes(normalizedQuery);
        });
    }, [filteredTalents, searchQuery]);

    return (
        <div className='pb-8 grid grid-cols-12 justify-around gap-6 pt-6 md:px-0 px-2 my-4 w-full relative'>
            <div className='grid sticky top-0 h-fit md:flex-col bg-white col-span-12 lg:col-span-3'>
                <Filters
                    talents={talentsList}
                    setFilteredTalents={setFilteredTalents}
                />
            </div>
            <div className='flex flex-col bg-white rounded-2xl border py-4 col-span-12 lg:col-span-9'>
                <div className='border-b mb-6 px-8 pb-4'>
                    <h2 className='h-bold text-3xl font-semibold'>
                        Talents
                    </h2>
                    <div className='mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
                        <p className='text-sm text-slate-600'>
                            Showing {visibleTalents.length} of {talentsList.length} talents
                        </p>
                        <input
                            type='search'
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                            placeholder='Search by name, state or industry'
                            className='w-full md:w-80 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-black'
                            aria-label='Search talents'
                        />
                    </div>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:px-8 px-2'>
                    {
                        visibleTalents.map((talent) => {
                            const firstName = talent.personal_information.first_name || 'Talent';
                            const location = talent.personal_information.current_location?.state || 'Australia';
                            const industryNames = talent.professional_information.industries.length > 0
                                ? talent.professional_information.industries
                                    .map((industry) => industry.industry.replace(/_/g, ' '))
                                    .join(', ')
                                : 'Multiple industries';

                            return(
                                <Link
                                    key={talent.id}
                                    href={`/talents/${talent.id}`}
                                    className='hover:cursor-pointer group hover:bg-[#efefef] rounded-lg border-2 transition-all hover:border-primary'
                                >
                                    <div className='flex flex-col gap-1 p-4 lg:p-3 h-full justify-between'>
                                        <Image
                                            src={talent.personal_information.profile_pic ? talent.personal_information.profile_pic: '/assets/images/profile-avatar.png'}
                                            alt={`${firstName} profile picture`}
                                            width={200}
                                            height={200}
                                            sizes='(max-width: 768px) 160px, 200px'
                                            className={'rounded-full w-40 h-40 border mx-auto mb-2 border-primary object-cover group-hover:border-2 group-hover:scale-105 transition-all'}
                                        />
                                        <p className='md:text-lg h-bold'>
                                            {firstName}
                                        </p>
                                        <p className='md:text-lg capitalize'>
                                            {industryNames}
                                        </p>

                                        <div className='flex justify-between mt-2'>
                                            <p className='text-green h-bold'>
                                                {location}
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
                {
                    visibleTalents.length === 0 && (
                        <div className='mx-8 my-6 rounded-lg border border-dashed p-8 text-center'>
                            <h3 className='text-lg font-semibold'>No talents found</h3>
                            <p className='mt-2 text-sm text-slate-600'>
                                Try removing some filters or using a different search term.
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TalentsList;
