import { useState, useEffect } from 'react';
import { TalentTypeAcf, IndustryType, IndustriesAvailable, CertificateType } from '@/types';
import { TALENT_CURRENT_STATUS_DROPDOWN, TALENT_WORK_PREFERENCE_DROPDOWN, INDUSTRIES } from '@/app/constants';
import CertificateTable from '@/components/CertificatesTable';
import { updateProfile } from '@/lib/protected-api';

type IndustriesPropsType = {
    currentIndex: number;
    initialValues: TalentTypeAcf;
    showNext: () => void;
    showPrev: () => void;
    setMainFormValues: (values: TalentTypeAcf) => void;
    userId: string;
};

const Industries = ({
    currentIndex,
    initialValues,
    showNext,
    showPrev,
    setMainFormValues,
    userId,
}:IndustriesPropsType) => {
    const [formValues, setFormValues] = useState<TalentTypeAcf['professional_information']>({
        ...initialValues.professional_information,
        work_preference: ['full-time'],
        industries: initialValues.professional_information.industries || [],
        skills_set: initialValues.professional_information.skills_set || [],
        certificates: initialValues.professional_information.certificates || [],
    });
    const [industriesError, setIndustriesError] = useState<string>('');
    const [industryError, setIndustryError] = useState<string>('');
    const [otherIndustry, setOtherIndustry] = useState<IndustryType>();
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [apiError, setApiError] = useState<string | null>(null);

    useEffect(() => {
        const otherIndustry = formValues.industries.find((ind) => ind.industry === 'other');

        if (otherIndustry) {
            setOtherIndustry(otherIndustry);
        } else {
            setOtherIndustry(undefined);
        }

    }, [formValues.industries]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAPILoading(true);

        if (formValues.industries.length === 0) {
            setIndustriesError('Please select at least one industry');
            return;
        }

        setIndustriesError('');

        setMainFormValues({
            ...initialValues,
            professional_information: {
                ...formValues,
            },
        });

        const body: any = {
            professional_information: {
                ...formValues,
                industries: [
                    ...formValues.industries,
                ],
            },
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

    const handleChipSelection = (industry: IndustriesAvailable) => {
        const existingIndustry = formValues.industries.find((ind) => ind.industry === industry);
        setIndustryError('');

        if (existingIndustry) {
            //Only remove if more than 1
            if (formValues.industries.length > 1) {
                setFormValues({
                    ...formValues,
                    industries: formValues.industries.filter((ind) => ind.industry !== industry),
                });
            } else {
                setIndustryError('You must select at least one industry.');
            }
        } else {
            // If the industry is not selected, add it
            setFormValues({
                ...formValues,
                industries: [
                    ...formValues.industries,
                    {
                        industry,
                        preferred_salary: '',
                        position: '',
                        certificates: [],
                        industry_description: '',
                        is_new: true,
                    },
                ],
            });
        }
    };

    const handleOtherIndustryNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedIndustries = formValues.industries.map((industry) => {
            if (industry.industry === 'other') {
                return {
                    ...industry,
                    other_industry: e.target.value,
                };
            }
            return industry;
        });
        setFormValues({
            ...formValues,
            industries: updatedIndustries,
        });
    };

    const handleCertificateLoaded = (certificates: CertificateType[]) => {
        setFormValues({
            ...formValues,
            certificates: certificates,
        });
    };

    return (
        <>
            <form
                className={`flex-col duration-1000 min-w-[90vw] max-w-[90vw] md:max-w-[850px] md:min-w-[850px] px-4 py-6 md:py-0`}
                style={{
                    translate: `${-100 * currentIndex}%`,
                }}
                onSubmit={handleSubmit}
            >
                <h4 className='font-bold py-2 text-xl mt-8'>
                    {`${currentIndex + 1}. Shape Your Future Opportunities`}
                </h4>
                <p className='mb-2 text-primary font-bold'>
                    Help us understand what you're looking for
                </p>
                <div className={`md:grid flex flex-col grid-cols-2 md:gap-4 gap-8`}>
                    <div className='col-span-2 lg:col-span-1'>
                        <label htmlFor="current_status" className="block pb-2">
                            Availability*
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
                            Preferred work types*
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
                    <div className='col-span-2 mt-4'>
                        <p className='font-bold'>
                            Tell us which industries you're most interested in working in.
                        </p>
                    </div>

                    <p className="text-primary col-span-2">
                        Select one or more industries
                    </p>
                    {
                        industryError && (
                            <p className="text-red-500 my-3 col-span-2">
                                {industryError}
                            </p>
                        )
                    }
                    <div className="flex gap-2 flex-wrap col-span-2">
                        {
                            INDUSTRIES.map((industry) => {
                                const selectedIndustry = formValues.industries.find((ind) => ind.industry === industry.value);

                                return (
                                    <div
                                        key={industry.name}
                                        className={`chip ${selectedIndustry ? 'chip-selected' : ''}`}
                                        onClick={() => handleChipSelection(industry.value)}
                                    >
                                        {industry.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        otherIndustry && <div className="col-span-2">
                            <label htmlFor="other_industry" className="block pb-2">
                                Other Industry name
                            </label>
                            <input
                                type="text"
                                name={`other_industry`}
                                id="other_industry"
                                className="w-full"
                                onChange={handleOtherIndustryNameChange}
                                value={otherIndustry.other_industry || ''}
                                required
                            />
                        </div>
                    }
                    <p className='text-sm col-span-2 mb-4 '>
                        <i>Note: We’ll build you an industry-specific portfolio to match you with the right opportunities.</i>
                    </p>
                </div>

                <div className='col-span-2'>
                    <h4 className='font-bold my-1'>
                        Licenses or Certificates
                    </h4>
                    <CertificateTable
                        certificates={formValues.certificates}
                        userId={userId}
                        industries={formValues.industries}
                        onLoadCompleted={handleCertificateLoaded}
                    />
                </div>

                <div className="col-span-2 pt-4">
                        <label htmlFor="skills_set" className="block pb-2">
                            Key Skills
                        </label>
                        <ul className='flex flex-col gap-3'>
                            {formValues.skills_set.map((skill, index) => (
                                <li key={index} className='flex gap-3 items-center'>
                                    <input
                                        type="text"
                                        required
                                        value={skill.skill}
                                        placeholder="Add your skill"
                                        className='text-sm'
                                        onChange={(e) => {
                                            const newSkills = formValues.skills_set.map((skill, i) => {
                                                if (i === index) {
                                                    return {
                                                        ...skill,
                                                        skill: e.target.value,
                                                    }
                                                }
                                                return skill;
                                            });

                                            setFormValues({
                                                ...formValues,
                                                skills_set: newSkills,
                                            });
                                        }}
                                    />
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const newSkills = formValues.skills_set.filter((_, i) => i !== index);

                                            setFormValues({
                                                ...formValues,
                                                skills_set: newSkills,
                                            });
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
                                </li>
                            ))}
                        </ul>
                        <button
                            className='primary-btn text-sm ml-0 mt-3'
                            onClick={(e) => {
                                e.preventDefault();

                                const newSkills = [
                                    ...formValues.skills_set,
                                ];
                                newSkills.push({
                                    skill: '',
                                });
                                setFormValues({
                                    ...formValues,
                                    skills_set: newSkills,
                                });
                            }}
                        >
                            Add Skill
                        </button>
                    </div>
                {
                    !formValues.industries.length && industriesError ? (
                        <p className='text-red-600 mt-4 border-2 border-red-600 rounded-md p-4 bg-red-200'>
                            {industriesError}
                        </p>
                    ) : null
                }
                {
                    apiError && (
                        <div className='col-span-2 p-2 border border-red-600 rounded-lg bg-red-200 mt-4'>
                                <p className='text-red-500'>
                                    Error: {apiError}
                                </p>
                            </div>
                        )
                }
                <div className='flex gap-4 items-center justify-center mt-8 mb-8'>
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
        </>
    );
};

export default Industries;
