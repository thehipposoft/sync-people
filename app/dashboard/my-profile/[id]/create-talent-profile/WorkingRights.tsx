import { useState } from 'react';
import { TalentTypeAcf } from '@/types';
import { INDUSTRIES } from '@/app/constants';
import { renderDescriptionPlaceholderByIndustry } from '@/lib/utils';

type WorkingRightsPropsType = {
    currentIndex: number;
    initialValues: TalentTypeAcf;
    showNext: () => void;
    showPrev: () => void;
    setMainFormValues: (values: TalentTypeAcf) => void;
}

const WorkingRights = ({
    currentIndex,
    initialValues,
    showNext,
    showPrev,
    setMainFormValues,
}:WorkingRightsPropsType) => {
    const [formValues, setFormValues] = useState<TalentTypeAcf['work_experience']>([]);

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

    const handleAddExperience = (e: React.MouseEvent<HTMLButtonElement>) => {
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
        });

        setFormValues(newFormValues);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setMainFormValues({
            ...initialValues,
            work_experience: formValues,
        });

        showNext();
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
                   {`${currentIndex + 1}. Work Experience`}
                </h4>
            </div>
            <p className='pb-4 text-[#1A335D] text-lg'>
                We're almost done
            </p>
            {
                formValues && formValues.map((experience, index) => (
                    <div key={index} className='border-b py-3 grid grid-cols-2 gap-4 col-span-2'>
                        <div className='flex items-center justify-between mb-2 col-span-2'>
                            <h3 className='text-2xl'>
                                {`${index + 1}. ${experience.position} ${experience.company_name ? 'at ' + experience.company_name : ''}`}
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
                                Position*
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
                                Company name*
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
                                Start Date*
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
                                required={!experience.currently_working}
                                value={experience.end_date}
                                onChange={(e) => handleChange(e, index)}
                                className='disabled:opacity-50'
                                disabled={experience.currently_working}
                            />
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
                        <div className='flex gap-4 items-center md:pt-6 col-span-2 md:col-span-1'>
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
                                placeholder={renderDescriptionPlaceholderByIndustry(experience.industry)}
                            />
                        </div>
                    </div>
                ))
            }
            <button
                className='primary-btn mt-2 ml-0 col-span-2 md:col-span-1 text-base'
                onClick={handleAddExperience}
            >
                + Add Work Experience
            </button>
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

export default WorkingRights;
