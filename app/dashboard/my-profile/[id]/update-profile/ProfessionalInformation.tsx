import { useState, useEffect } from "react";
import { updateProfile } from "@/lib/protected-api";
import { INDUSTRIES } from "@/app/constants";
import { IndustriesAvailable, professional_information, IndustryType } from "@/types";
import Modal from "@/components/Modal";
import CertificateTable from "@/components/CertificatesTable";

type ProfessionalPropsType = {
    initialValues: professional_information;
    userId: string;
};

const ProfessionalInformation = ({
    initialValues,
    userId,
}:ProfessionalPropsType) => {
    const [formValues, setFormValues] = useState<professional_information>({
        ...initialValues,
        industries: initialValues.industries || [],
        skills_set: initialValues.skills_set || [],
    });
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [industriesToUpdate, setIndustriesToUpdate] = useState<professional_information['industries']>([]);
    const [industryError, setIndustryError] = useState<string>('');
    const [otherIndustry, setOtherIndustry] = useState<IndustryType>();
    //Modal
    const [openUpdatedDataModal, setOpenUpdatedDataModal] = useState<boolean>(false);

    useEffect(() => {
        const otherIndustry = formValues.industries.find((ind) => ind.industry === 'other');
        if (otherIndustry) {
            setOtherIndustry(otherIndustry);
        }
    }, [formValues.industries]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAPILoading(true);

        const response = await updateProfile(userId, {
            professional_information: {
                ...formValues,
                industries: [
                    ...formValues.industries,
                    ...industriesToUpdate,
                ],
            },
        });

        setFormValues({
            ...formValues,
            industries: [
                ...formValues.industries,
                ...industriesToUpdate,
            ],
        });

        setIndustriesToUpdate([]);
        setIsAPILoading(false);
        setOpenUpdatedDataModal(true);
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

    return (
        <div>
            <form onSubmit={handleFormSubmit} className='grid grid-cols-2 gap-4'>
                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="current_status" className="block pb-2">Employment Status</label>
                    <select
                        id="current_status"
                        name="current_status"
                        required
                        value={formValues.current_status}
                        onChange={handleInputChange}
                    >
                        <option value="available">Available</option>
                        <option value="working">Working</option>
                        <option value="offline">Offline</option>
                    </select>
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="work_preference" className="block pb-2">Work Preference</label>
                    <select
                        id="work_preference"
                        name="work_preference"
                        required
                        value={formValues.work_preference}
                        onChange={handleInputChange}
                    >
                        <option value="part-time">Part-time</option>
                        <option value="full-time">Full-time</option>
                        <option value="casual">Casual</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                    </select>
                </div>

                <div className='col-span-2'>
                    <h4 className='font-bold my-1'>
                        Industries
                    </h4>
                    <p className="mb-4">
                        Select the industries you are interested in. (you can choose more than one option)*
                    </p>
                    {
                        industryError && (
                            <p className="text-red-500 text-sm my-3">
                                {industryError}
                            </p>
                        )
                    }
                    <div className="flex gap-2 flex-wrap mb-4">
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
                        otherIndustry && <div>
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
                </div>
                <div className='col-span-2'>
                    <h4 className='font-bold my-1'>
                        Certificates/Licenses
                    </h4>
                    <CertificateTable
                        certificates={formValues.certificates}
                        userId={userId}
                        industries={formValues.industries}
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="skills_set" className="block pb-2">
                        Key Skills
                    </label>
                    <ul className='flex flex-col gap-3'>
                        {formValues.skills_set.map((value, index) => (
                            <li key={index} className='flex gap-3 items-center'>
                                <input
                                    type="text"
                                    required
                                    value={value.skill}
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
                <div className='w-full col-span-2 flex'>
                    <button
                        className='primary-btn mt-4 mx-auto text-base'
                        type='submit'
                        disabled={isAPILoading}
                    >
                        Update Professional Information
                    </button>
                </div>
            </form>
            <Modal
                isOpen={openUpdatedDataModal}
                onClose={() => setOpenUpdatedDataModal(false)}
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
                    <a
                        className="primary-btn"
                        href={`/talents/${userId}`}
                    >
                        View Public Portfolio
                    </a>
                </div>
            </Modal>
        </div>
    )
};

export default ProfessionalInformation;
