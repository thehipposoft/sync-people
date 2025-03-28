'use client'
import { useState, useRef } from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { TalentTypeAcf } from '@/types';
import { updateProfile, uploadMedia } from '@/lib/protected-api';
import Modal from '@/components/Modal';
import { ROUTES } from '@/app/constants';
//Form steps
import BasicInformation from './BasicInformation';
import Industries from './Industries';
import WorkingRights from './WorkingRights';
import Extras from './Extras';

type MyProfileProps = {
    user: TalentTypeAcf;
    userId: string;
}

const TalentForm = ({
    user,
    userId,
}:MyProfileProps) => {
    const registrationFormRef = useRef<any>(null);
    const [formValues, setFormValues] = useState<TalentTypeAcf>({
        ...user,
    });
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [profileImage, setProfileImage] = useState<string>('');
    const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
    const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
    const [openLoadingModal, setOpenLoadingModal] = useState<boolean>(false);

    const getFileUrl = async (file: File, title: string, altText: string) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("alt_text", altText);
        formData.append("status", "publish");

        const response = await uploadMedia(formData);

        return response.url;
    }

    const showNext = () => {
        setCurrentIndex((index) => {
            if (index === 4) return 0;
            return index + 1;
        })
        registrationFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const showPrev = () => {
        setCurrentIndex((index) => {
            if (index === 0)
                return 3;

            return index - 1;
        })
        registrationFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const handleUploadProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if ( e.target.files) {
            const file = e.target.files[0];
            setProfileImageFile(file);
            const reader = new FileReader();

            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleFinishForm = async (apiFormValues: TalentTypeAcf) => {
        setOpenLoadingModal(true);

        if (profileImageFile) {
            const profileImageUrl = await getFileUrl(
                profileImageFile,
                `${apiFormValues.personal_information.first_name} ${apiFormValues.personal_information.last_name} - Profile Picture`,
                `${apiFormValues.personal_information.first_name} ${apiFormValues.personal_information.last_name} - Profile Picture`
            );
            apiFormValues.personal_information.profile_pic = profileImageUrl;
        }

        // Collect promises for industries certificates
        const certificatePromises = apiFormValues.professional_information.industries
            .flatMap(industry =>
                industry.certificates
                    .filter(certificate => certificate.partialFile)
                    .map(async (certificate) => {
                        certificate.file_url = certificate.partialFile
                        ? await getFileUrl(
                            certificate.partialFile,
                            certificate.name,
                            certificate.name
                        )
                        : '';
                    })
            );

        // Collect promises for other credentials
        const credentialPromises = apiFormValues.extras.other_credentials
            .filter(credential => credential.partialFile)
            .map(async (credential) => {
                credential.file_url = credential.partialFile
                ? await getFileUrl(
                    credential.partialFile,
                    credential.name,
                    credential.name
                )
                : '';
            });

        // Wait for all uploads to complete
        await Promise.all([...certificatePromises, ...credentialPromises]);

        const response = await updateProfile(userId, apiFormValues);

        setOpenLoadingModal(false);
        setOpenSuccessModal(true);
    };

    return (
        <div ref={registrationFormRef} className='md:w-full flex justify-center gap-12 px-2 md:px-0'>
            <div className='flex flex-col rounded-2xl my-4 md:w-[900px] w-full px-4 bg-white border'>
                <h1 className='text-3xl h-bold py-4 pl-4 border-b'>
                    Create Talent Profile
                </h1>
                <div className='flex justify-between items-center mt-6'>
                    <div className='relative group mx-auto lg:mx-0'>
                        <Image
                            src={profileImage ? profileImage : '/assets/images/profile-avatar.png'}
                            alt={`${formValues.personal_information.first_name} ${formValues.personal_information.last_name}`}
                            width={150} height={150}
                            className='h-[140px] lg:h-[150px] rounded-full border-2 border-primary-text object-cover'
                        />

                        <div className={`absolute top-0 left-0 rounded-full w-full h-full bg-[#000000b3] ${profileImage ? 'opacity-0' : 'opacity-100'} duration-500 flex justify-center items-center cursor-pointer p-2`}>
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
                                    <span className='text-white cursor-pointer'>
                                        Click to update
                                    </span>
                                </label>
                            </span>
                        </div>
                    </div>
                    <div className='flex-col gap-2 items-end hidden md:block'>
                        {
                            currentIndex === 0 ?
                            <div>
                                <p className='text-[#FF8149] text-lg pb-2'>10% completed</p>
                                <div className='bg-gradient-to-r from-[#FF8149] to-[#7087E5] h-[30px] w-[60px] rounded-3xl duration-500' />
                            </div>
                            :
                            currentIndex === 1 ?
                            <div>
                                <p className='text-[#FF8149] text-lg pb-2'>40% completed</p>
                                <div className='bg-gradient-to-r from-[#FF8149] to-[#7087E5] h-[30px] w-[120px] rounded-3xl duration-500' />
                            </div>
                            :
                            currentIndex === 2 ?
                            <div>
                                <p className='text-[#7087E5] text-lg pb-2'>60% completed</p>
                                <div className='bg-gradient-to-r from-[#FF8149] via-[#7087E5] to-[#3EC1AA] h-[30px] w-[180px] rounded-3xl duration-500' />
                            </div>
                            :
                            currentIndex === 3 ?
                            <div>
                                <p className='text-[#3EC1AA] text-lg pb-2'>90% completed</p>
                                <div className='bg-gradient-to-r from-[#FF8149] via-[#7087E5] to-[#3EC1AA] h-[30px] w-[240px] rounded-3xl duration-500' />
                            </div>
                            : ''
                        }
                    </div>
                </div>
                <div className='md:flex flex-col'>
                    <div className='flex md:gap-80 md:w-[850px] mx-auto'>
                        <div className='hidden flex-col gap-1 text-center items-center pt-8 pr-8'>
                            <Image src={'/assets/images/profileStrength.png'} alt='percentage of strength' width={140} height={120} />
                            <p className='h-bold'>Profile Strength</p>
                            <p>Want to stand out?</p>
                            <button className='text-[#326B88] border rounded-3xl border-[#326B88] md:px-6 px-2 py-1 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Go Premium!</button>
                        </div>
                    </div>
                    <div className='flex overflow-hidden'>
                        <BasicInformation
                            currentIndex={currentIndex}
                            initialValues={formValues}
                            setMainFormValues={setFormValues}
                            showNext={showNext}
                        />
                        <Industries
                            currentIndex={currentIndex}
                            initialValues={formValues}
                            setMainFormValues={setFormValues}
                            showNext={showNext}
                            showPrev={showPrev}
                        />
                        <WorkingRights
                            currentIndex={currentIndex}
                            setMainFormValues={setFormValues}
                            initialValues={formValues}
                            showNext={showNext}
                            showPrev={showPrev}
                        />
                        <Extras
                            currentIndex={currentIndex}
                            setMainFormValues={setFormValues}
                            initialValues={formValues}
                            showNext={handleFinishForm}
                            showPrev={showPrev}
                        />
                    </div>
                </div>
                <div className='hidden gap-6 justify-center py-6'>
                    {
                        currentIndex != 0 ?
                        <button
                            className='text-[#FF8149] py-2 px-4 rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                            onClick={showPrev}
                        >
                            Back
                        </button>
                        : ''
                    }
                    {
                        currentIndex != 3 ?
                        <button
                            className='text-[#FF8149] py-2 px-4 rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                            onClick={showNext}
                        >
                            Next
                        </button>
                        :
                        <Link href={'/my-profile'}>
                            <button
                                className='text-[#326B88] py-2 px-4 border-[#326B88] border rounded-3xl hover:bg-[#326B88] hover:text-white duration-700 cursor-pointer'
                            >
                                Finish
                            </button>
                        </Link>

                    }
                </div>
            </div>
            <Modal isOpen={openLoadingModal}>
                <div>
                    <h1 className='text-3xl h-bold text-center mb-3'>
                        Updating Profile
                    </h1>
                    <p className='text-center mb-4'>
                        Please wait while we creating your skills portfolio
                    </p>
                </div>
            </Modal>
            <Modal isOpen={openSuccessModal}>
                <div>
                    <h1 className='text-3xl h-bold text-center mb-3'>
                        Profile Updated
                    </h1>
                    <p className='text-center mb-4'>
                        Your profile has been successfully updated
                    </p>
                    <div className='flex justify-center primary-btn mx-auto'>
                        <a href={`${ROUTES.MY_PROFILE}/${userId}`}>
                            Go to my profile
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default TalentForm;
