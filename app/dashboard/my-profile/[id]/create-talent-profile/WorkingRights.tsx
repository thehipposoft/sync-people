import { useState } from 'react';
import { TalentTypeAcf } from '@/types';
import { updateProfile } from '@/lib/protected-api';

type WorkingRightsPropsType = {
    currentIndex: number;
    initialValues: TalentTypeAcf;
    showNext: () => void;
    showPrev: () => void;
    setMainFormValues: (values: TalentTypeAcf) => void;
    userId: string;
}

const WorkingRights = ({
    currentIndex,
    initialValues,
    showNext,
    showPrev,
    setMainFormValues,
    userId,
}:WorkingRightsPropsType) => {
    const [formValues, setFormValues] = useState<TalentTypeAcf['work_experience']>(initialValues.work_experience || []);
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [apiError, setApiError] = useState<string | null>(null);

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
            other_industry: '',
            visible_for: [],
        });

        setFormValues(newFormValues);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAPILoading(true);

        setMainFormValues({
            ...initialValues,
            work_experience: formValues,
        });

        const body: any = {
            work_experience: formValues,
        }

        const response = await updateProfile(userId, body);

        if(response.status === 500) {
            setIsAPILoading(true);
            console.log('Internal Server Error');
            return;
        }

        if(response.data && response.data.status === 403) {
            setApiError(response.message);
            setIsAPILoading(false);
            return;
        }

        setIsAPILoading(false);

        showNext();
    };

    return (
        <form
            className={`flex-col duration-1000 min-w-[90vw] max-w-[90vw] md:max-w-[850px] md:min-w-[850px] px-4 py-6 md:py-0`}
            style={{
                translate: `${-100 * currentIndex}%`,
            }}
            onSubmit={handleSubmit}
        >
            <h4 className='font-bold py-4 text-xl mt-8'>
                {`${currentIndex + 1}. Work Experience`}
            </h4>
            <p className='pb-4 text-primary text-lg font-bold'>
                Tell us about your past work experience
            </p>
            <p className='pb-4 text-primary text-sm'>
                This is your chance to showcase what you've done before! Let us know the position you held, the company you worked for and when you started (and ended, if applicable). If you're currently working there, just tick the box.
                You can also use the description to highlight your key responsibilities, achievements, or anything you're proud of in that role.
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

                        <div className='col-span-2 w-full'>
                            <label htmlFor={`description`} className="block pb-2">
                                Description*
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

                        <div className='col-span-2 w-full'>
                            <label htmlFor={`visible_for`} className="block">
                                Visible for Industries
                            </label>
                            <p className='mb-3'>
                                Your experience will be visible for the following industries.
                            </p>
                            <div className="flex gap-2 flex-wrap mb-4">
                                {
                                    initialValues.professional_information.industries.map((industry) => {
                                        const selectedIndustry = experience.visible_for.find((ind) => ind === industry.industry);

                                        return (
                                            <div
                                                key={industry.industry}
                                                className={`chip ${selectedIndustry ? 'chip-selected' : ''}`}
                                                onClick={() => {
                                                    const newFormValues = [...formValues];
                                                    const currentExperience = newFormValues[index];

                                                    if (selectedIndustry) {
                                                        currentExperience.visible_for = currentExperience.visible_for.filter((ind) => ind !== industry.industry);
                                                    } else {
                                                        currentExperience.visible_for.push(industry.industry);
                                                    }

                                                    setFormValues(newFormValues);
                                                }}
                                            >
                                                {industry.industry === 'other'
                                                    ? industry.other_industry
                                                    : industry.industry.replace(/_/g, ' ')
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
            <button
                className='primary-btn my-6 col-span-2 md:col-span-1 text-lg ml-0'
                onClick={handleAddExperience}
            >
                + Add Work Experience
            </button>

            {
                apiError && (
                    <div className='col-span-2 p-2 border border-red-600 rounded-lg bg-red-200 mt-4'>
                            <p className='text-red-500'>
                                Error: {apiError}
                            </p>
                        </div>
                    )
            }
            <div className='flex gap-4 items-center justify-center mt-4'>
                <button
                    className='text-[#FF8149] py-2 px-4 rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                    onClick={(e) => {
                        e.preventDefault();
                        showPrev();
                    }}
                    disabled={isAPILoading}
                >
                    Back
                </button>
                <div className='md:flex hidden justify-center'>
                    {currentIndex + 1} | 4
                </div>
                <button
                    className='text-[#FF8149] py-2 px-4 rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                    type='submit'
                    disabled={isAPILoading}
                >
                    Next
                </button>
            </div>
        </form>
    );
};

export default WorkingRights;
