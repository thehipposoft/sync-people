'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { TalentTypeAcf } from '@/types';
import { updateProfile, uploadMedia } from '@/lib/protected-api';
import Modal from '@/components/Modal';
import PersonalInformation from './PersonalInformation';
import ProfessionalInformation from './ProfessionalInformation';
import WorkExperience from './WorkExperience';
import ExtraInformation from './ExtraInformation';

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
        section: 'personal_information' | 'professional_information' | 'working_rights' | 'extras' | 'work_experience',
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
            personal_information: {
                about_myself: formValues.personal_information.about_myself,
            },
        };

        const response = await updateProfile(userId, apiValues);

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

            const response = await updateProfile(userId, apiValues);

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
                    <WorkExperience
                        initialValues={userData.work_experience}
                        userId={userId}
                        availableIndustries={userData.professional_information.industries}
                    />
                );
            case 'extras':
                return (
                    <ExtraInformation initialValues={userData.extras} userId={userId} />
                );
            default:
                return (
                    <div>

                    </div>
                );
            };
    };

    return (
        <div className='flex flex-col rounded-2xl my-4 md:w-[900px] w-[95vw] mx-auto md:mx-0 md:px-4 p-6 bg-white border mt-28 md:mt-0'>
            <h1 className='text-3xl h-bold pb-4 border-b mb-4'>
                Update Profile
            </h1>
            <div className='flex gap-10 w-full mx-auto items-center pt-4 mb-4 flex-wrap lg:flex-nowrap'>
                <div className='relative group mx-auto lg:mx-0'>
                    <Image
                        src={formValues.personal_information.profile_pic ? formValues.personal_information.profile_pic : '/assets/images/profile-avatar.png'}
                        alt={`${formValues.personal_information.first_name} ${formValues.personal_information.last_name}`}
                        width={140} height={140}
                        className='h-[140px] lg:h-28 rounded-full border-2 border-primary object-cover'
                    />
                    <div className='absolute top-0 left-0 rounded-full opacity-0 w-[140px] h-[140px] lg:h-28 lg:w-full   bg-[#000000b3] group-hover:opacity-100 duration-500 flex justify-center items-center cursor-pointer p-2'>
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
                            <label htmlFor='profile_pic' className='flex w-[140px] h-[140px] lg:h-28 lg:w-full cursor-pointer justify-center items-center rounded-full'>
                                <span className='text-white'>Change profile image</span>
                            </label>
                        </span>
                    </div>
                    <p className='text-center text-sm mt-2 lg:hidden'>
                        Tap to update image
                    </p>
                </div>

                <div className='flex flex-col w-full'>
                    <label htmlFor="personal_information.about_myself" className="block pb-2">
                        About me
                    </label>
                    <textarea
                        rows={4}
                        placeholder='Write a short description about yourself'
                        name='personal_information.about_myself'
                        spellCheck={true}
                        id='personal_information.about_myself'
                        className='flex w-full border p-2 resize-none'
                        value={formValues.personal_information.about_myself}
                        onChange={(e) => handleInputChange(e, 'personal_information', 'about_myself')}
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

            <ul className='flex justify-between my-6 overflow-x-auto scrollbar-always'>
                <li
                    className={`px-4 pb-3 cursor-pointer transition-all ${selectedTab === 'personal' ? 'text-primary border-b-4 font-bold border-primary' : ''}`}
                    onClick={() => handleTabChange('personal')}
                >
                    Personal Information
                </li>
                <li
                    className={`px-4 cursor-pointer transition-all ${selectedTab === 'professional' ? 'text-primary border-b-4 font-bold border-primary' : ''}`}
                    onClick={() => handleTabChange('professional')}
                >
                    Professional Preferences
                </li>
                <li
                    className={`px-4 cursor-pointer transition-all ${selectedTab === 'experience' ? 'text-primary border-b-4 font-bold border-primary' : ''}`}
                    onClick={() => handleTabChange('experience')}
                >
                    Work Experience
                </li>

                <li
                    className={`px-4 cursor-pointer transition-all min-w-[7rem] lg:min-w-fit ${selectedTab === 'extras' ? 'text-primary border-b-4 font-bold border-primary' : ''}`}
                    onClick={() => handleTabChange('extras')}
                >
                    More about me
                </li>
            </ul>

            <div>
                {renderTabContent()}
            </div>
            <Modal
                isOpen={openUpdatedModal}
                onClose={() => setOpenUpdatedModal(false)}
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
