import React, { useState } from 'react';
import { Link } from 'next-view-transitions';
import { updateProfile } from '@/lib/protected-api';
import { WorkExperienceType } from '@/types';
import { INDUSTRIES } from '@/app/constants';
import Modal from '@/components/Modal';

type PersonalInformationPropsType = {
    initialValues: WorkExperienceType[];
    userId: string;
};

const WorkExperience = ({
    initialValues,
    userId,
}:PersonalInformationPropsType) => {
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<WorkExperienceType[]>(initialValues ? initialValues : []);
    const [openUpdatedDataModal, setOpenUpdatedDataModal] = useState<boolean>(false);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAPILoading(true);

        const body: any = {
            work_experience: formValues,
        }

        const response = await updateProfile(userId, body);

        if(response.status === 500) {
            setIsAPILoading(true);
        } else {
            setOpenUpdatedDataModal(true);
            setIsAPILoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;

        const newFormValues: any = [...formValues];
        newFormValues[index][name] = value;

        setFormValues(newFormValues);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, checked } = e.target;

        const newFormValues: any = [...formValues];
        newFormValues[index][name] = checked;

        setFormValues(newFormValues);
    };

    const handleExperience = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newFormValues = [...formValues];
        newFormValues.push({
            company_name: '',
            position: '',
            start_date: '',
            end_date: '',
            currently_working: false,
            description: '',
            industry: 'construction',
            other_industry: '',
        });

        setFormValues(newFormValues);
    };

    return (
        <>
            <form className='grid grid-cols-2 gap-4' onSubmit={handleFormSubmit}>
                {
                    formValues && formValues.map((experience, index) => (
                        <div key={index} className='border-b py-3 grid grid-cols-2 gap-4 col-span-2'>
                            <div className='flex items-center justify-between mb-2 col-span-2'>
                                <h3 className='text-2xl'>
                                    {`${index + 1}. ${experience.position} at ${experience.company_name}`}
                                </h3>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const newFormValues = [...formValues];
                                        newFormValues.splice(index, 1);
                                        setFormValues(newFormValues);

                                    }}
                                    className="bg-red-500 p-1 rounded-md"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                    >
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M5.73708 6.54391V18.9857C5.73708 19.7449 6.35257 20.3604 7.11182 20.3604H16.8893C17.6485 20.3604 18.264 19.7449 18.264 18.9857V6.54391M2.90906 6.54391H21.0909" stroke="#fff" strokeWidth="1.7" strokeLinecap="round">
                                            </path>
                                            <path d="M8 6V4.41421C8 3.63317 8.63317 3 9.41421 3H14.5858C15.3668 3 16 3.63317 16 4.41421V6" stroke="#fff" strokeWidth="1.7" strokeLinecap="round">
                                            </path>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label htmlFor={`position`} className="block pb-2">
                                    Position
                                </label>
                                <input
                                    type="text"
                                    id={`position`}
                                    name={`position`}
                                    required
                                    value={experience.position}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label htmlFor={`company_name`} className="block pb-2">
                                    Company name
                                </label>
                                <input
                                    type="text"
                                    id={`company_name`}
                                    name={`company_name`}
                                    required
                                    value={experience.company_name}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label htmlFor={`start_date`} className="block pb-2">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    id={`start_date`}
                                    name={`start_date`}
                                    required
                                    value={experience.start_date}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label htmlFor={`end_date`} className="block pb-2">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    id={`end_date`}
                                    name={`end_date`}
                                    required
                                    value={experience.end_date}
                                    onChange={(e) => handleChange(e, index)}
                                    className='disabled:opacity-50'
                                    disabled={experience.currently_working}
                                />
                            </div>
                            <div className='flex gap-4 items-center md:pt-2 col-span-2'>
                                <input
                                    type="checkbox"
                                    id={`currently_working`}
                                    name={`currently_working`}
                                    checked={experience.currently_working}
                                    onChange={(e) => handleCheckboxChange(e, index)}
                                />
                                <label htmlFor={`currently_working`} className="block">
                                    Currently working here
                                </label>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label htmlFor={`industry`} className="block pb-2">
                                    Industry
                                </label>
                                <select
                                    id={`industry`}
                                    name={`industry`}
                                    required
                                    value={experience.industry}
                                    onChange={(e) => handleChange(e, index)}
                                >
                                    {
                                        INDUSTRIES.map((industry, index) => (
                                            <option key={index} value={industry.value}>
                                                {industry.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            {
                                experience.industry === 'other' && (
                                    <div className="col-span-2 md:col-span-1">
                                        <label htmlFor={`other_industry`} className="block pb-2">
                                            Other Industry name
                                        </label>
                                        <input
                                            type="text"
                                            id={`other_industry`}
                                            name={`other_industry`}
                                            required
                                            value={experience.other_industry}
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                    </div>
                                )
                            }

                            <div className='col-span-2 w-full'>
                                <label htmlFor={`description`} className="block pb-2">
                                    Description
                                </label>
                                <textarea
                                    id={`description`}
                                    name={`description`}
                                    className='w-full border p-2'
                                    required
                                    value={experience.description}
                                    onChange={(e) => handleChange(e, index)}
                                    rows={3}
                                />
                            </div>
                        </div>
                    ))
                }
                <button
                    className='primary-btn mt-2 ml-0 col-span-2 md:col-span-1 text-base'
                    onClick={handleExperience}
                >
                    + Add Work Experience
                </button>
                <div className='w-full col-span-2 flex'>
                    <button
                        className='primary-btn mt-4 mx-auto text-base'
                        type='submit'
                        disabled={isAPILoading}
                    >
                        Update Work Experience
                    </button>
                </div>
            </form>
            <Modal
                isOpen={openUpdatedDataModal}
            >
                <h4 className="mb-4">
                    Your data has been updated successfully
                </h4>
                <div className="flex flex-wrap gap-4">
                    <button
                        className="secondary-btn"
                        onClick={() => setOpenUpdatedDataModal(false)}
                    >
                        Keep editing
                    </button>
                    <Link
                        className="primary-btn"
                        href={`/talents/${userId}`}
                    >
                        View Public Profile
                    </Link>
                </div>
            </Modal>
        </>
    )
};


export default WorkExperience;
