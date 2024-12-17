'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TalentTypeAcf } from '@/types';

type Props = {
    userData: TalentTypeAcf;
};

const ProfileForm = ({
    userData,
}:Props) => {
    const [selectedTab, setSelectedTab] = useState<'personal' | 'professional' | 'experience' | 'extras'>('personal');
    const [formValues, setFormValues] = useState<TalentTypeAcf>({
        ...userData,
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        section: 'personal_information' | 'professional_information' | 'working_rights' | 'current_location' | 'extras',
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

    const renderTabContent = () => {
        switch(selectedTab) {
            case 'personal':
                return (
                    <form className='grid grid-cols-2 gap-4'>
                       <div className=''>
                            <label htmlFor="name" className="block pb-2">First Name:</label>
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
                            <label htmlFor="name" className="block pb-2">Last Name:</label>
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
                            <label htmlFor="email" className="block pb-2">Email:</label>
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
                            <label htmlFor="mobile" className="block pb-2">Mobile:</label>
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
                            <label htmlFor="date_of_birth" className="block pb-2">Date of Birth:</label>
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
                            <label htmlFor="country" className="block pb-2">Country:</label>
                            <input
                                type="text"
                                id="personal_information.country"
                                name="personal_information.country"
                                required
                                value={formValues.personal_information.country}
                                onChange={(e) => handleInputChange(e, 'personal_information', 'country')}
                            />
                        </div>
                    </form>
                );
            case 'professional':
                return (
                    <form className='grid grid-cols-2 gap-4'>
                        <div className=''>
                            <label htmlFor="current_status" className="block pb-2">Current Status:</label>
                            <input
                                type="text"
                                id="professional_information.current_status"
                                name="professional_information.current_status"
                                required
                                value={formValues.professional_information.current_status}
                                onChange={(e) => handleInputChange(e, 'professional_information', 'current_status')}
                            />
                        </div>

                        <div className=''>
                            <label htmlFor="work_preference" className="block pb-2">Work Preference:</label>
                            <input
                                type="text"
                                id="professional_information.work_preference"
                                name="professional_information.work_preference"
                                required
                                value={formValues.professional_information.work_preference}
                                onChange={(e) => handleInputChange(e, 'professional_information', 'work_preference')}
                            />
                        </div>

                        <div>
                            <p>Industries:</p>
                            <div className='flex flex-col gap-3'>
                                {
                                    formValues.professional_information.industries.map((industry, index) => (
                                        <div key={index} className=''>
                                            <input
                                                type="text"
                                                id={`professional_information.industries[${index}]`}
                                                name={`professional_information.industries[${index}]`}
                                                required
                                                value={industry.industry}
                                                onChange={(e) => handleInputChange(e, 'professional_information', 'industries')}
                                            />
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </form>
                );
            case 'experience':
                return (
                    <form className='grid grid-cols-2 gap-4'>
                        Experience
                    </form>
                );
            case 'extras':
                return (
                    <form className='grid grid-cols-2 gap-4'>
                        <div className=''>
                            <label htmlFor="level_of_english" className="block pb-2">Level of English:</label>
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
                            <label htmlFor="prefered_language" className="block pb-2">Preferred Language:</label>
                            <input
                                type="text"
                                id="extras.prefered_language"
                                name="extras.prefered_language"
                                required
                                value={formValues.extras.prefered_language}
                                onChange={(e) => handleInputChange(e, 'extras', 'prefered_language')}
                            />
                        </div>

                        <div className=''>
                            <label htmlFor="other_languages" className="block pb-2">Other Languages:</label>
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
                            <label htmlFor="more_about_myself" className="block pb-2">More About Myself:</label>
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
                            <label htmlFor="education_level" className="block pb-2">Education Level:</label>
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
                            <label htmlFor="transport" className="block pb-2">Transport:</label>
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
                            <label htmlFor="presentation_video" className="block pb-2">Presentation Video:</label>
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
                    <form>

                    </form>
                );
            };
    };

    return (
        <div>
            <div className='flex flex-col md:w-full'>
                <div className='md:w-full flex justify-center gap-12 px-2 md:px-0'>
                    <div className='flex flex-col rounded-2xl my-4 md:w-[900px] w-full md:px-4 px-6 bg-white border'>
                        <div className='border-b'>
                            <h1 className='text-3xl h-bold py-3 pl-4'>
                                Update Profile
                            </h1>
                        </div>
                        <div className='flex gap-10 md:w-[850px] mx-auto items-center'>
                            <div className='pt-4 md:pl-2'>
                                <Image
                                    src={userData.personal_information.profile_pic}
                                    alt={`${userData.personal_information.first_name} ${userData.personal_information.last_name}`}
                                    width={160} height={160}
                                    className='ml-6 mt-4 md:w-[150px] w-36 rounded-full'
                                />
                            </div>
                            <textarea
                                rows={4}
                                className='flex w-full border p-2'
                            >
                                {formValues.extras.more_about_myself}
                            </textarea>
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

                        <div className='md:flex hidden gap-6 justify-center py-6'></div>
                        <div className='flex md:hidden justify-center my-8'>
                            <Link
                                href={'/my-profile'}
                                className='text-[#326B88] py-2 px-4 border-[#326B88] border rounded-3xl hover:bg-[#326B88] hover:text-white duration-700 cursor-pointer'
                            >
                                Finish
                            </Link>
                        </div>
                    </div>
                    <div className='hidden flex-col my-4 gap-4'>
                        <Image src={'/assets/images/publicity/ads-1.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-2.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-3.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-4.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-5.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-6.png'} alt='' width={200} height={150} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;
