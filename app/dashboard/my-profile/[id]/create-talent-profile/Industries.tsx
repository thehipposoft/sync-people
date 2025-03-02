import { useState } from 'react';
import { TalentTypeAcf } from '@/types';
import { TALENT_CURRENT_STATUS_DROPDOWN, TALENT_WORK_PREFERENCE_DROPDOWN, INDUSTRIES } from '@/app/constants';
import { Select, SelectItem } from "@heroui/select";
import { Tooltip } from "@heroui/tooltip";
import Link from "next/link";

type IndustriesPropsType = {
    currentIndex: number;
    initialValues: TalentTypeAcf;
    showNext: () => void;
    showPrev: () => void;
    setMainFormValues: (values: TalentTypeAcf) => void;
}

const Industries = ({
    currentIndex,
    initialValues,
    showNext,
    showPrev,
    setMainFormValues,
}:IndustriesPropsType) => {
    const [formValues, setFormValues] = useState<TalentTypeAcf['professional_information']>({
        ...initialValues.professional_information,
        industries: [],
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setMainFormValues({
            ...initialValues,
            professional_information: {
                ...formValues,
            },
        });

        showNext();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        const keys = name.split('.');

        setFormValues((prevValues) => {
            let updatedValues = { ...prevValues };
            let temp:any = updatedValues;

            for (let i = 0; i < keys.length - 1; i++) {
                const key = keys[i];

                // Ensure the nested object exists
                temp[key] = { ...temp[key] };
                temp = temp[key];
            }

            // Set the new value
            temp[keys[keys.length - 1]] = value;

            return updatedValues;
        });
    };

    const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        const industriesArray = value.split(',');
        const industriesToPush:TalentTypeAcf['professional_information']['industries'] = industriesArray.map((industry:any) => {
            return {
                industry,
                preferred_salary: '',
                position: '',
                certificates: [],
                role_description: '',
            };
        }
        );

        setFormValues((prevValues) => {
            return {
                ...prevValues,
                industries: industriesToPush,
            };
        });
    };

    const handleIndustryInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;

        setFormValues((prevValues) => {
            let updatedValues = { ...prevValues };
            updatedValues.industries[index] = {
                ...updatedValues.industries[index],
                [name]: value,
            };

            return updatedValues;
        });
    };

    return (
        <form
            className={`flex-col duration-1000 md:min-w-[850px] md:px-4 py-6 md:py-0`}
            style={{
                translate: `${-100 * currentIndex}%`,
            }}
            onSubmit={handleSubmit}
        >
            <div className='flex items-center justify-between pt-8'>
                <h4 className='font-bold py-4 text-xl'>
                    2. My Industries
                </h4>
            </div>
            <p className='pb-4 text-[#1A335D] text-lg'>
                Come on, this is just the beginning
            </p>
            <div className={`md:grid grid-cols-2 gap-4`}>
                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="current_status" className="block pb-2">
                        Current Status*
                    </label>
                    <select
                        name="current_status"
                        id="current_status"
                        className="w-full"
                        onChange={handleInputChange}
                        value={formValues.current_status}
                    >
                        {
                            TALENT_CURRENT_STATUS_DROPDOWN.map((status) => (
                                <option key={status.value} value={status.value}>
                                    {status.label}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="current_status" className="block pb-2">
                        Work Preference*
                    </label>
                    <select
                        name="work_preference"
                        id="work_preference"
                        className="w-full"
                        onChange={handleInputChange}
                        value={formValues.work_preference}
                    >
                        {
                            TALENT_WORK_PREFERENCE_DROPDOWN.map((status) => (
                                <option key={status.value} value={status.value}>
                                    {status.label}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <p className="mb-4 text-[#1A335D] col-span-2">
                    Industries of choice *you can choose more than one option
                </p>
                <Select
                    className="col-span-2"
                    label=""
                    placeholder="Select one or more industries"
                    selectionMode="multiple"
                    onChange={handleMultiSelectChange}
                    required
                    items={INDUSTRIES}
                >
                    {INDUSTRIES.map((industry) => (
                        <SelectItem key={industry.value}>
                            {industry.name}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            {
                formValues.industries.map((industry, index) => (
                    <div key={index} className='border border-[#FF8149] rounded-3xl p-4 mt-4'>
                        <div className='flex items-center justify-between'>
                            <h4 className='font-bold py-4 text-xl capitalize'>
                                {index + 1}. {industry.industry}
                            </h4>
                        </div>
                        <div className='md:grid grid-cols-2 gap-4'>
                            <div className='col-span-2 lg:col-span-1'>
                                <label htmlFor="position" className="block pb-2">
                                    Position
                                </label>
                                <input
                                    type="text"
                                    name={`position`}
                                    id="position"
                                    className="w-full"
                                    onChange={(e) => handleIndustryInputChange(e, index)}
                                    value={industry.position}
                                />
                            </div>
                            <div className='col-span-2 lg:col-span-1'>
                                <label htmlFor={`preferred_salary`} className="flex pb-2 items-center gap-2">
                                    Preferred salary (AUD)
                                    <Tooltip
                                        className="bg-primary-text text-white rounded-md"
                                        content={
                                            <div className="px-1 py-2">
                                                <Link href={`/categories/${industry.industry}`} className="text-sm">
                                                    Link to category / Money converter
                                                </Link>
                                            </div>
                                        }
                                    >
                                        <svg
                                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            width={15}
                                            height={15}
                                        >
                                            <g id="SVGRepo_iconCarrier">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="#1C274C">
                                                </path>
                                            </g>
                                        </svg>
                                    </Tooltip>
                                </label>
                                <input
                                    type="text"
                                    name={`preferred_salary`}
                                    id="preferred_salary"
                                    className="w-full"
                                    onChange={(e) => handleIndustryInputChange(e, index)}
                                    value={industry.preferred_salary}
                                />
                            </div>

                            <div className='col-span-2'>
                                <label htmlFor="role_description" className="block pb-2">
                                    Role Description
                                </label>
                                <textarea
                                    name={`role_description`}
                                    id="role_description"
                                    className="w-full"
                                    onChange={(e) => handleIndustryInputChange(e, index)}
                                    value={industry.role_description}
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className='flex gap-4 items-center justify-center mt-4'>
                <button
                    className='text-[#FF8149] py-2 px-4 rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                    onClick={(e) => {
                        e.preventDefault();
                        showPrev();
                    }}
                >
                    Back
                </button>
                <div className='md:flex hidden justify-center'>
                    {currentIndex + 1} | 4
                </div>
                <button
                    className='text-[#FF8149] py-2 px-4 rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                    type='submit'
                >
                    Next
                </button>
            </div>
        </form>
    );
};

export default Industries;
