'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { TalentTypeAcf } from '@/types';
import { updateProfile, uploadMedia } from '@/lib/protected-api';
import Modal from '@/components/Modal';
import PersonalInformation from './PersonalInformation';
import ProfessionalInformation from './ProfessionalInformation';
import WorkExperience from './WorkExperience';

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

    const handleUpdateDescriptionClick = async () => {
        setIsAPILoading(true);

        const apiValues = {
            extras: {
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

    const renderTabContent = () => {
        switch(selectedTab) {
            case 'personal':
                return (
                    <PersonalInformation initialValues={userData.personal_information} userId={userId} />
                );
            case 'professional':
                return (
                    <ProfessionalInformation initialValues={userData.professional_information} userId={userId} />
                );
            case 'experience':
                return (
                    <WorkExperience initialValues={userData.work_experience} userId={userId} />
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
