import { useEffect, useState } from "react";
import { INDUSTRIES } from "../constants";
import { TalentTypeAcf } from '@/types';

type Props = {
    talents: TalentTypeAcf[];
    setFilteredTalents: (talents: TalentTypeAcf[]) => void;
};

const Filters = ({
    talents,
    setFilteredTalents
}: Props) => {
    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;

        if (value === "all") {
            setFilteredTalents(checked ? talents : []);
        } else {
            setFilteredTalents((prev) => {
                if (checked) {

                    // Add talents with the selected industry
                    const newTalents = talents.filter(
                        (talent) =>
                            talent.professional_information?.industries?.filter(
                                (industry) => industry.industry === value
                            ).length > 0
                    );

                    console.log(">>prev", prev);
                    console.log(">>newTalents", newTalents);

                    return newTalents;
                } else {
                    // Remove talents with the unselected industry
                    const newTalents = prev.filter(
                        (talent) =>
                            !talent.professional_information?.industries?.includes(value)
                    );
                    return newTalents;
                }
            });
        }
    };

    return (
        <div className="">
            <div className='flex justify-between py-4 border-b mx-4'>
                <p>Filters</p>
                <p className='text-[#0095A9] cursor-pointer hover:underline'>Clear all</p>
            </div>
            <div className='py-4 border-b mx-4'>
                <div className='flex justify-between items-center'>
                    <p className='h-bold text-xl'>
                        Industry
                    </p>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.07273 0.666992L0 1.73972L6 7.7397L12 1.73972L10.9273 0.666992L6 5.59423L1.07273 0.666992Z" fill="#323842"/>
                    </svg>
                </div>
                <div className="flex flex-col gap-1">
                    {
                        INDUSTRIES.map((industry) => (
                            <div
                                className='flex items-center gap-2'
                                key={industry.value}
                            >
                                <label className='text-black'>
                                    <input
                                        type="checkbox"
                                        name="industry"
                                        value={industry.value}
                                        className='mr-2'
                                        onChange={handleFilterChange}
                                    />
                                    {industry.name}
                                </label>
                            </div>
                        ))
                    }
                </div>
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
    );
};

export default Filters;
