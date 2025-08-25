import { useEffect, useState, useRef } from "react";
import { INDUSTRIES } from "../constants";
import { TalentTypeAcf } from '@/types';

type Props = {
    talents: TalentTypeAcf[];
    setFilteredTalents: (talents: TalentTypeAcf[]) => void;
};

type FiltersType = {
    industries: string[];
    workTypes: string[];
}

const Filters = ({
    talents,
    setFilteredTalents
}: Props) => {
    const filtersRef = useRef<HTMLDivElement | null>(null);
    const [openFilters, setOpenFilters] = useState<boolean>(false);
    const [selectedFilters, setSelectedFilters] = useState<FiltersType>({
        industries: [],
        workTypes: []
    });

    useEffect(() => {
        //Close filters if click outside box
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            // Ignore clicks inside your filters container
            if (filtersRef.current && filtersRef.current.contains(target)) {
                return;
            }

            // Ignore clicks inside Google autocomplete dropdown
            if ((target as HTMLElement).closest('.pac-container')) {
                return;
            }

            setOpenFilters(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const filteredTalents = talents.filter((talent) => {
            let matches = true;

            if (selectedFilters.industries.length > 0) {
                matches = talent.professional_information?.industries?.some((industry) =>
                    selectedFilters.industries.includes(industry.industry)
                );
            }

            return matches;
        });

        setFilteredTalents(filteredTalents);
    }, [selectedFilters]);

    const handleIndustryFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;

        const newFilters = {
            ...selectedFilters,
            industries: checked
                ? [...selectedFilters.industries, value]
                : selectedFilters.industries.filter((industry) => industry !== value)
        };

        setSelectedFilters(newFilters);
    };

    const handleClearFilters = () => {
        setSelectedFilters({
            industries: [],
            workTypes: []
        });
        setFilteredTalents(talents);
    };

    const toggleFilters = () => {
        setOpenFilters(!openFilters);
    };

    return (
        <>
            <div
                className={`flex lg:hidden items-center gap-2 border p-2 rounded-md cursor-pointer transition-all justify-center`}
                onClick={toggleFilters}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M23 3.81836V5.63651H1V3.81836H23Z" fill="currentColor"/>
                    <path d="M23 11.0908V12.909H1V11.0908H23Z" fill="currentColor"/>
                    <path d="M23 18.3633V20.1814H1V18.3633H23Z" fill="currentColor"/>
                    <ellipse cx="6.5" cy="11.9997" rx="2.75" ry="2.72723" fill="currentColor"/>
                    <ellipse cx="17.5" cy="4.72723" rx="2.75" ry="2.72723" fill="currentColor"/>
                    <ellipse cx="17.5" cy="19.2731" rx="2.75" ry="2.72723" fill="currentColor"/>
                </svg>
                <span className={`font-medium ${openFilters ? 'tw-text-secondary-500' : ''}`}>
                    Filter results
                </span>
            </div>
            <div
                className={`bg-white border rounded-md transition-all duration-300 ease-in-out aside ${
                    openFilters
                    ? 'lg:max-h-auto opacity-100 translate-y-0 z-10 open'
                    : 'max-h-0 lg:max-h-fit opacity-0 translate-y-[-10px] -z-10 lg:z-0 lg:opacity-100 lg:translate-y-0'
                }`}
                ref={filtersRef}
            >
                <div className='flex justify-between py-4 border-b mx-4'>
                    <p>Filters</p>
                    <button className='text-[#0095A9] cursor-pointer hover:underline' onClick={handleClearFilters}>
                        Clear all
                    </button>
                </div>
                <div className='py-4 border-b mx-4'>
                    <div className='flex justify-between items-center mb-3'>
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
                                            onChange={handleIndustryFilterChange}
                                            checked={selectedFilters.industries.includes(industry.value)}
                                        />
                                        {industry.name}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='py-4 border-b mx-4 hidden'>
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
        </>
    );
};

export default Filters;
