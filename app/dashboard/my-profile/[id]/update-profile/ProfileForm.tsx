'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { TalentTypeAcf } from '@/types';
import { INDUSTRIES } from '@/app/constants';
import { updateProfile, uploadMedia } from '@/lib/protected-api';
import Modal from '@/components/Modal';

type Props = {
    userData: TalentTypeAcf;
    userId: string;
};

const ProfileForm = ({
    userData,
    userId,
}:Props) => {
    const [selectedTab, setSelectedTab] = useState<'personal' | 'professional' | 'experience' | 'extras'>('personal');
    const [formValues, setFormValues] = useState<TalentTypeAcf>({
        ...userData,
    });
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [openUpdatedModal, setOpenUpdatedModal] = useState<boolean>(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>,
        section: 'personal_information' | 'professional_information' | 'working_rights' | 'current_location' | 'extras' | 'work_experience',
        field: string
    ) => {
        const { value } = e.target;

        setFormValues({
            ...formValues,
            [section]: {
                ...formValues[section],
                [field]: value,
            },
        });
    };

    const handleTabChange = (tab: 'personal' | 'professional' | 'experience' | 'extras') => {
        setSelectedTab(tab);
    };

    const handleWorkExperienceChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
        index: number,
        field: string
    ) => {
        const { value } = e.target;

        setFormValues({
            ...formValues,
            work_experience: formValues.work_experience.map((experience, i) => {
                if(i === index) {
                    return {
                        ...experience,
                        [field]: value,
                    };
                }

                return experience;
            }),
        });
    }

    const handleUpdateProfileClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleUpdatePersonalInformationClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAPILoading(true);

        const body: any = {
            ...formValues,
        }

        delete body.personal_information.profile_pic;

        const response = await updateProfile(formValues, userId);

        if(response.status === 500) {
            setIsAPILoading(true);
            console.log('Internal Server Error');
        } else {
            setIsAPILoading(false);
            console.log('Profile updated successfully');
        }
    };

    const handleUpdateDescriptionClick = async () => {
        setIsAPILoading(true);

        const apiValues = {
            ...formValues,
            extras: {
                ...formValues.extras,
                more_about_myself: formValues.extras.more_about_myself,
            },
        };

        const response = await updateProfile(apiValues, userId);

        if(response.status === 500) {
            setIsAPILoading(true);
        } else {
            setIsAPILoading(false);
            setOpenUpdatedModal(true);
        }
    };

    const handleUploadProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        setIsAPILoading(true);

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", "Profile Picture");
        formData.append("alt_text", "Profile Image");
        formData.append("status", "publish");

        const uploadResponse = await uploadMedia(formData);

        if (uploadResponse) {
            const apiValues = {
                ...formValues,
                personal_information: {
                    ...formValues.personal_information,
                    profile_pic: uploadResponse.id,
                },
            };

            const response = await updateProfile(apiValues, userId);

            setFormValues({
                ...formValues,
                personal_information: {
                    ...formValues.personal_information,
                    profile_pic: uploadResponse.url,
                },
            });

            setIsAPILoading(false);
        }
    };

    console.log(">>FormValues", formValues)

    const renderTabContent = () => {
        switch(selectedTab) {
            case 'personal':
                return (
                    <form
                        className='grid grid-cols-2 gap-4'
                        onSubmit={handleUpdatePersonalInformationClick}
                    >
                       <div className=''>
                            <label htmlFor="name" className="block pb-2">First Name</label>
                            <input
                                type="text"
                                id="personal_information.first_name"
                                name="personal_information.first_name"
                                required
                                value={formValues.personal_information.first_name}
                                onChange={(e) => handleInputChange(e, 'personal_information', 'first_name')}
                            />
                        </div>

                        <div className=''>
                            <label htmlFor="name" className="block pb-2">Last Name</label>
                            <input
                                type="text"
                                id="personal_information.last_name"
                                name="personal_information.last_name"
                                required
                                value={formValues.personal_information.last_name}
                                onChange={(e) => handleInputChange(e, 'personal_information', 'last_name')}
                            />
                        </div>

                        <div className=''>
                            <label htmlFor="email" className="block pb-2">Email</label>
                            <input
                                type="email"
                                id="personal_information.email"
                                name="personal_information.email"
                                required
                                value={formValues.personal_information.email}
                                onChange={(e) => handleInputChange(e, 'personal_information', 'email')}
                            />
                        </div>

                        <div className=''>
                            <label htmlFor="mobile" className="block pb-2">Mobile</label>
                            <input
                                type="tel"
                                id="personal_information.mobile"
                                name="personal_information.mobile"
                                required
                                value={formValues.personal_information.mobile}
                                onChange={(e) => handleInputChange(e, 'personal_information', 'mobile')}
                            />
                        </div>

                        <div className=''>
                            <label htmlFor="date_of_birth" className="block pb-2">Date of Birth</label>
                            <input
                                type="date"
                                id="personal_information.date_of_birth"
                                name="personal_information.date_of_birth"
                                required
                                value={formValues.personal_information.date_of_birth}
                                onChange={(e) => handleInputChange(e, 'personal_information', 'date_of_birth')}
                            />
                        </div>

                        <div className=''>
                            <label htmlFor="country" className="block pb-2">Country</label>
                            <input
                                type="text"
                                id="personal_information.country"
                                name="personal_information.country"
                                required
                                value={formValues.personal_information.country}
                                onChange={(e) => handleInputChange(e, 'personal_information', 'country')}
                            />
                        </div>
                        <div className='w-full col-span-2 flex'>
                            <button
                                className='primary-btn mt-4 mx-auto'
                                type='submit'
                                disabled={isAPILoading}
                            >
                                Update Personal Information
                            </button>
                        </div>

                    </form>
                );
            case 'professional':
                return (
                    <form className='grid grid-cols-2 gap-4'>
                        <div className=''>
                            <label htmlFor="current_status" className="block pb-2">Current Status</label>
                            <select
                                id="professional_information.current_status"
                                name="professional_information.current_status"
                                required
                                value={formValues.professional_information.current_status}
                                onChange={(e) => handleInputChange(e, 'professional_information', 'current_status')}
                            >
                                <option value="available">Available</option>
                                <option value="working">Working</option>
                                <option value="offline">Offline</option>
                            </select>
                        </div>

                        <div className=''>
                            <label htmlFor="work_preference" className="block pb-2">Work Preference</label>
                            <select
                                id="professional_information.work_preference"
                                name="professional_information.work_preference"
                                required
                                value={formValues.professional_information.work_preference}
                                onChange={(e) => handleInputChange(e, 'professional_information', 'work_preference')}
                            >
                                <option value="part-time">Part-time</option>
                                <option value="full-time">Full-time</option>
                                <option value="casual">Casual</option>
                                <option value="contract">Contract</option>
                                <option value="internship">Internship</option>
                            </select>
                        </div>

                        <div className='col-span-2'>
                            <h4 className='font-bold'>
                                Industries
                            </h4>
                            {
                                formValues.professional_information.industries.map((industry, index) => (
                                    <div key={index} className='border-b py-3 grid grid-cols-2 gap-4'>
                                        <h3 className='capitalize mb-2 col-span-2 text-2xl'>
                                            {`${index + 1}. ${industry.industry}`}
                                        </h3>
                                        <div className=''>
                                            <label htmlFor={`professional_information.position[${index}]`} className="block pb-2">
                                                Position
                                            </label>
                                            <input
                                                type="text"
                                                id={`professional_information.industries[${index}]`}
                                                name={`professional_information.industries[${index}]`}
                                                required
                                                value={industry.position}
                                                onChange={(e) => handleInputChange(e, 'professional_information', 'industries')}
                                            />
                                        </div>
                                        <div className=''>
                                            <label htmlFor={`professional_information.position[${index}]`} className="block pb-2">
                                                Preferred salary (AUD)
                                            </label>
                                            <input
                                                type="text"
                                                id={`professional_information.industries[${index}]`}
                                                name={`professional_information.industries[${index}]`}
                                                required
                                                value={industry.preferred_salary}
                                                onChange={(e) => handleInputChange(e, 'professional_information', 'industries')}
                                            />
                                        </div>
                                        <div>
                                            <label className="block pb-2">
                                                Certificates
                                            </label>
                                            {
                                                industry.certificates && industry.certificates.map((certificate, index) => (
                                                    <div key={index} className='flex gap-3'>
                                                        {
                                                            certificate.certificate ?
                                                                <Link
                                                                    href={certificate.certificate}
                                                                    className='underline'
                                                                    target='_blank'
                                                                >
                                                                    {certificate.name}
                                                                </Link>
                                                            : <p>{certificate.name}</p>
                                                        }

                                                        <button>
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={20}
                                                                height={20}
                                                            >
                                                                <g id="SVGRepo_iconCarrier">
                                                                    <path d="M5.73708 6.54391V18.9857C5.73708 19.7449 6.35257 20.3604 7.11182 20.3604H16.8893C17.6485 20.3604 18.264 19.7449 18.264 18.9857V6.54391M2.90906 6.54391H21.0909" stroke="#1C1C1C" strokeWidth="1.7" strokeLinecap="round">
                                                                    </path>
                                                                    <path d="M8 6V4.41421C8 3.63317 8.63317 3 9.41421 3H14.5858C15.3668 3 16 3.63317 16 4.41421V6" stroke="#1C1C1C" strokeWidth="1.7" strokeLinecap="round">
                                                                    </path>
                                                                </g>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                ))
                                            }
                                            <button
                                                className='primary-btn mt-3 mx-0 text-lg p-0 w-10 h-10'
                                                onClick={(e) => {
                                                    e.preventDefault();

                                                    industry.certificates.push({
                                                        name: '',
                                                        certificate: '',
                                                        isNew: true,
                                                    });
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </form>
                );
            case 'experience':
                return (
                    <form className='grid grid-cols-2 gap-4'>
                        {
                            formValues.work_experience && formValues.work_experience.map((experience, index) => (
                                <div key={index} className='border-b py-3 grid grid-cols-2 gap-4 col-span-2'>
                                    <h3 className='mb-2 col-span-2 text-2xl'>
                                        {`${index + 1}. ${experience.position} at ${experience.company_name}`}
                                    </h3>
                                    <div className=''>
                                        <label htmlFor={`work_experience.experience[${index}].position`} className="block pb-2">
                                            Position
                                        </label>
                                        <input
                                            type="text"
                                            id={`work_experience[${index}].position`}
                                            name={`work_experience[${index}].position`}
                                            required
                                            value={experience.position}
                                            onChange={(e) => handleWorkExperienceChange(e, index, 'position')}
                                        />
                                    </div>
                                    <div className=''>
                                        <label htmlFor={`work_experience[${index}].position`} className="block pb-2">
                                            Company name
                                        </label>
                                        <input
                                            type="text"
                                            id={`work_experience[${index}].company_name`}
                                            name={`work_experience[${index}].company_name`}
                                            required
                                            value={experience.company_name}
                                            onChange={(e) => handleWorkExperienceChange(e, index, 'company_name')}
                                        />
                                    </div>
                                    <div className=''>
                                        <label htmlFor={`work_experience[${index}].start_date`} className="block pb-2">
                                            Start Date
                                        </label>
                                        <input
                                            type="date"
                                            id={`work_experience[${index}].start_date`}
                                            name={`work_experience[${index}].start_date`}
                                            required
                                            value={experience.start_date}
                                            onChange={(e) => handleInputChange(e, 'work_experience', 'experience')}
                                        />
                                    </div>
                                    <div className=''>
                                        <label htmlFor={`work_experience.experience[${index}].end_date`} className="block pb-2">
                                            End Date
                                        </label>
                                        <input
                                            type="date"
                                            id={`work_experience.experience[${index}].end_date`}
                                            name={`work_experience.experience[${index}].end_date`}
                                            required
                                            value={experience.end_date}
                                            onChange={(e) => handleInputChange(e, 'work_experience', 'experience')}
                                        />
                                    </div>
                                    <div className=''>
                                        <label htmlFor={`work_experience.experience[${index}].end_date`} className="block pb-2">
                                            Industry
                                        </label>
                                        <select
                                            id={`work_experience.experience[${index}].industry`}
                                            name={`work_experience.experience[${index}].industry`}
                                            required
                                            value={formValues.work_experience[index].industry}
                                            onChange={(e) => handleInputChange(e, 'work_experience', 'experience')}
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
                                    <div className='flex gap-4 items-center'>
                                        <input
                                            type="checkbox"
                                            id={`work_experience.experience[${index}].currently_working`}
                                            name={`work_experience.experience[${index}].currently_working`}
                                            checked={experience.currently_working}
                                            onChange={(e) => handleInputChange(e, 'work_experience', 'experience')}
                                        />
                                        <label htmlFor={`work_experience.experience[${index}].end_date`} className="block">
                                            Currently working here
                                        </label>
                                    </div>
                                    <div className='col-span-2 w-full'>
                                        <label htmlFor={`work_experience.experience[${index}].description`} className="block pb-2">
                                            Description
                                        </label>
                                        <textarea
                                            id={`work_experience.experience[${index}].description`}
                                            name={`work_experience.experience[${index}].description`}
                                            className='w-full border p-2'
                                            required
                                            value={experience.description}
                                            //onChange={(e) => handleInputChange(e, 'work_experience', 'experience')}
                                            rows={3}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </form>
                );
            case 'extras':
                return (
                    <form className='grid grid-cols-2 gap-4'>
                        <div className=''>
                            <label htmlFor="level_of_english" className="block pb-2">Level of English</label>
                            <input
                                type="text"
                                id="extras.level_of_english"
                                name="extras.level_of_english"
                                required
                                value={formValues.extras.level_of_english}
                                onChange={(e) => handleInputChange(e, 'extras', 'level_of_english')}
                            />
                        </div>

                        <div className=''>
                            <label htmlFor="preferred_language" className="block pb-2">Preferred Language</label>
                            <input
                                type="text"
                                id="extras.preferred_language"
                                name="extras.preferred_language"
                                required
                                value={formValues.extras.preferred_language}
                                onChange={(e) => handleInputChange(e, 'extras', 'preferred_language')}
                            />
                        </div>

                        <div className=''>
                            <label htmlFor="other_languages" className="block pb-2">Other Languages</label>
                            <input
                                type="text"
                                id="extras.other_languages"
                                name="extras.other_languages"
                                required
                                value={formValues.extras.other_languages}
                                onChange={(e) => handleInputChange(e, 'extras', 'other_languages')}
                            />
                        </div>

                        <div className=''>
                            <label htmlFor="more_about_myself" className="block pb-2">More About Myself</label>
                            <input
                                type="text"
                                id="extras.more_about_myself"
                                name="extras.more_about_myself"
                                required
                                value={formValues.extras.more_about_myself}
                                onChange={(e) => handleInputChange(e, 'extras', 'more_about_myself')}
                            />
                        </div>

                        <div className=''>
                            <label htmlFor="education_level" className="block pb-2">Education Level</label>
                            <input
                                type="text"
                                id="extras.education_level"
                                name="extras.education_level"
                                required
                                value={formValues.extras.education_level}
                                onChange={(e) => handleInputChange(e, 'extras', 'education_level')}
                            />
                        </div>

                        <div className=''>
                            <label htmlFor="transport" className="block pb-2">Transport</label>
                            <input
                                type="text"
                                id="extras.transport"
                                name="extras.transport"
                                required
                                value={formValues.extras.transport}
                                onChange={(e) => handleInputChange(e, 'extras', 'transport')}
                            />
                        </div>

                        <div className=''>
                            <label htmlFor="presentation_video" className="block pb-2">Presentation Video</label>
                            <input
                                type="text"
                                id="extras.presentation_video"
                                name="extras.presentation_video"
                                required
                                value={formValues.extras.presentation_video}
                                onChange={(e) => handleInputChange(e, 'extras', 'presentation_video')}
                            />
                        </div>
                    </form>
                );
            default:
                return (
                    <div>

                    </div>
                );
            };
    };

    return (
        <div className='flex flex-col rounded-2xl my-4 md:w-[900px] w-full md:px-4 p-6 bg-white border '>
            <h1 className='text-3xl h-bold pb-4 border-b mb-4'>
                Update Profile
            </h1>
            <div className='flex gap-10 w-full mx-auto items-center pt-4 mb-4'>
                <div className='relative group'>
                    <Image
                        src={formValues.personal_information.profile_pic ? formValues.personal_information.profile_pic : '/assets/images/profile-avatar.png'}
                        alt={`${formValues.personal_information.first_name} ${formValues.personal_information.last_name}`}
                        width={140} height={140}
                        className='mt-4 md:mt-0 h-28 rounded-full border-2 border-primary-text object-cover'
                    />
                    <div className='absolute top-0 left-0 rounded-full opacity-0 w-full h-full bg-[#000000b3] group-hover:opacity-100 duration-500 flex justify-center items-center cursor-pointer p-2'>
                        <span className='text-sm text-center text-white'>
                            <input
                                id='profile_pic'
                                name='profile_pic'
                                type='file'
                                accept='image/*'
                                className='hidden'
                                onChange={handleUploadProfileImage}
                                multiple={false}
                            />
                            <label htmlFor='profile_pic'>
                                <span className='text-white cursor-pointer'>Change profile image</span>
                            </label>
                        </span>
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <label htmlFor="personal_information.about_me" className="block pb-2">
                        About me
                    </label>
                    <textarea
                        rows={4}
                        name='personal_information.about_me'
                        id='personal_information.about_me'
                        className='flex w-full border p-2 resize-none'
                        value={formValues.extras.more_about_myself}
                        onChange={(e) => handleInputChange(e, 'extras', 'more_about_myself')}
                    />
                    <button
                        onClick={handleUpdateDescriptionClick}
                        className='w-fil ml-auto text-xs mt-2 primary-btn mr-0'
                        disabled={isAPILoading}
                    >
                        Save description
                    </button>
                </div>

            </div>

            <div>
                <ul className='flex justify-between my-6'>
                    <li
                        className={`px-4 pb-3 cursor-pointer transition-all ${selectedTab === 'personal' ? 'text-primary-text border-b-4 font-bold border-primary-text' : ''}`}
                        onClick={() => handleTabChange('personal')}
                    >
                        Personal Information
                    </li>
                    <li
                        className={`px-4 cursor-pointer transition-all ${selectedTab === 'professional' ? 'text-primary-text border-b-4 font-bold border-primary-text' : ''}`}
                        onClick={() => handleTabChange('professional')}
                    >
                        Professional Information
                    </li>
                    <li
                        className={`px-4 cursor-pointer transition-all ${selectedTab === 'experience' ? 'text-primary-text border-b-4 font-bold border-primary-text' : ''}`}
                        onClick={() => handleTabChange('experience')}
                    >
                        Work Experience
                    </li>
                    <li
                        className={`px-4 cursor-pointer transition-all ${selectedTab === 'extras' ? 'text-primary-text border-b-4 font-bold border-primary-text' : ''}`}
                        onClick={() => handleTabChange('extras')}
                    >
                        Extras
                    </li>
                </ul>
            </div>
            <div>
                {renderTabContent()}
            </div>
            <Modal
                isOpen={openUpdatedModal}
            >
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-2xl'>
                        Profile Updated Successfully
                    </h1>
                    <button className='primary-btn mt-3' onClick={() => setOpenUpdatedModal(false)}>
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default ProfileForm;
