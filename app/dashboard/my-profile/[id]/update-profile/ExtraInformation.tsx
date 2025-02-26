import { useState } from 'react';
import { Link } from 'next-view-transitions';
import { updateProfile } from '@/lib/protected-api';
import { ExtraInformationType } from '@/types';
import { LEVEL_OF_ENGLISH, EDUCATION_LEVEL, LANGUAGES, ROUTES } from '@/app/constants';
import UploadFileModal from '@/components/UploadFileModal';
import Modal from '@/components/Modal';
import { SOCIAL_MEDIA_PLATFORMS } from '@/app/constants';
import { Tooltip } from "@heroui/tooltip";

type PersonalInformationPropsType = {
    initialValues: ExtraInformationType;
    userId: string;
};

const ExtraInformation = ({
    initialValues,
    userId,
}:PersonalInformationPropsType) => {
    //console.log('>>initialValues', initialValues);
    const [openUploadModal, setOpenUploadModal] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<ExtraInformationType>({
        ...initialValues,
        other_credentials: initialValues.other_credentials || [],
        languages: initialValues.languages || [],
        social_media_links: initialValues.social_media_links || [],
    });
    const [openRemoveCredentialModal, setOpenRemoveCredentialModal] = useState<boolean>(false);
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [credentialToRemove, setCredentialToRemove] = useState<number>(0);
    const [openUpdatedDataModal, setOpenUpdatedDataModal] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleModalCancelClick = () => {
        setOpenUploadModal(false);
    };

    const handleUploadCredentialClick = async (fileId: string, name: string, file_url: string) => {
        const otherCredentials = [
            ...formValues.other_credentials,
            {
                certificate: fileId,
                name,
                file_url,
            },
        ];

        setFormValues({
            ...formValues,
            other_credentials: otherCredentials,
        });

        const apiValues = {
            extras: {
                other_credentials: otherCredentials,
            }
        };

        const response = await updateProfile(apiValues, userId);

        setOpenUploadModal(false);
    };

    const handleRemoveCredential = async () => {
        setIsAPILoading(true);

        const otherCredentials = formValues.other_credentials.filter((_, i) => i !== credentialToRemove);

        setFormValues({
            ...formValues,
            other_credentials: otherCredentials,
        });

        const apiValues = {
            extras: {
                other_credentials: otherCredentials,
            }
        };

        const response = await updateProfile(apiValues, userId);

        setOpenRemoveCredentialModal(false);
        setIsAPILoading(false);
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAPILoading(true);

        const response = await updateProfile({
            extras: formValues,
        }, userId);

        setOpenUpdatedDataModal(true);

        setIsAPILoading(false);
    };

    return (
        <>
            <form className='grid grid-cols-2 gap-4' onSubmit={handleFormSubmit}>
                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="level_of_english" className="block pb-2">Level of English</label>
                    <select
                        id="level_of_english"
                        name="level_of_english"
                        required
                        value={formValues.level_of_english}
                        onChange={handleInputChange}
                    >
                        {LEVEL_OF_ENGLISH.map((level) => (
                            <option key={level.value} value={level.value}>{level.name}</option>
                        ))}
                    </select>
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="preferred_language" className="block pb-2">Preferred Language</label>
                    <input
                        type="text"
                        id="preferred_language"
                        name="preferred_language"
                        required
                        value={formValues.preferred_language}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="education_level" className="block pb-2">Education Level</label>
                    <select
                        id="education_level"
                        name="education_level"
                        required
                        value={formValues.education_level}
                        onChange={handleInputChange}
                    >
                        {EDUCATION_LEVEL.map((level) => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="transport" className="block pb-2">Transport</label>
                    <select
                        id="transport"
                        name="transport"
                        required
                        value={formValues.transport}
                        onChange={handleInputChange}
                    >
                        <option value={'yes'}>Yes</option>
                        <option value={'no'}>No</option>
                    </select>
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="presentation_video" className="block pb-2">
                        Languages
                    </label>
                    {LANGUAGES.map((language) => (
                        <div key={language} className='flex gap-2'>
                            <input
                                type="checkbox"
                                id={language}
                                name={language}
                                checked={formValues.languages.includes(language)}
                                onChange={e => {
                                    if (e.target.checked) {
                                        setFormValues({
                                            ...formValues,
                                            languages: [...formValues.languages, language],
                                        });
                                    } else {
                                        setFormValues({
                                            ...formValues,
                                            languages: formValues.languages.filter((lang) => lang !== language),
                                        });
                                    }
                                }}
                            />
                            <label htmlFor={language}>{language}</label>
                        </div>
                    ))}
                </div>

                <div className="col-span-2 md:col-span-1">
                    <div className='flex gap-2 items-center mb-2'>
                        <label htmlFor="presentation_video" className="block">
                            Presentation Video URL
                        </label>
                        <Tooltip
                            className="bg-primary-text text-white rounded-md"
                            content={
                                <div className="px-1 py-2">
                                    <Link target='_blank' href={ROUTES.PRESENTATION_VIDEO} className="text-sm">
                                        Why Create a "presentation" Video? Click here
                                    </Link>
                                </div>
                            }
                        >
                            <svg
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                            >
                                <g id="SVGRepo_iconCarrier">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="#1C274C">
                                    </path>
                                </g>
                            </svg>
                        </Tooltip>
                    </div>

                    <input
                        type="text"
                        id="presentation_video"
                        name="presentation_video"
                        value={formValues.presentation_video}
                        onChange={handleInputChange}
                    />
                    <p className='text-sm opacity-70 mt-1'>
                        Include a link to your preferred platform (YouTube, Vimeo, TikTok, etc.)
                    </p>
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="other_credentials" className="block pb-2">
                        Other Credentials
                    </label>
                    <ul>
                        {formValues.other_credentials.map((credential, index) => (
                            <li key={index} className='flex gap-3 items-center'>
                                <Link href={credential.file_url} target="_blank" className='underline'>
                                    {credential.name}
                                </Link>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCredentialToRemove(index);
                                        setOpenRemoveCredentialModal(true);
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
                            setOpenUploadModal(true)
                        }}
                    >
                        + new Credential
                    </button>
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="social_media_links" className="block pb-2">
                        Social Media Links
                    </label>
                    <ul className='flex flex-col gap-3'>
                        {formValues.social_media_links.map((socialMedia, index) => (
                            <li key={index} className='flex gap-3 items-center'>
                                <select
                                    value={socialMedia.platform}
                                    className='text-sm'
                                    onChange={(e:any) => {
                                        const newSocialMediaLinks = formValues.social_media_links.map((social, i) => {
                                            if (i === index) {
                                                return {
                                                    ...social,
                                                    platform: e.target.value,
                                                };
                                            }

                                            return social;
                                        });

                                        setFormValues({
                                            ...formValues,
                                            social_media_links: newSocialMediaLinks,
                                        });
                                    }}
                                >
                                    {SOCIAL_MEDIA_PLATFORMS.map((platform) => (
                                        <option key={platform.value} value={platform.value}>
                                            {platform.name}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    required
                                    value={socialMedia.url}
                                    className='text-sm'
                                    onChange={(e) => {
                                        const newSocialMediaLinks = formValues.social_media_links.map((social, i) => {
                                            if (i === index) {
                                                return {
                                                    ...social,
                                                    url: e.target.value,
                                                };
                                            }

                                            return social;
                                        });

                                        setFormValues({
                                            ...formValues,
                                            social_media_links: newSocialMediaLinks,
                                        });
                                    }}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const newSocialMediaLinks = formValues.social_media_links.filter((_, i) => i !== index);

                                        setFormValues({
                                            ...formValues,
                                            social_media_links: newSocialMediaLinks,
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
                            const newSocialMediaLinks = [
                                ...formValues.social_media_links,
                            ];
                            newSocialMediaLinks.push({
                                platform: 'linkedin',
                                url: '',
                            });

                            setFormValues({
                                ...formValues,
                                social_media_links: newSocialMediaLinks,
                            });
                        }}
                    >
                        + Social media
                    </button>
                </div>
                <div className='w-full col-span-2 flex'>
                    <button
                        className='primary-btn mt-6 mx-auto text-base'
                        type='submit'
                        disabled={isAPILoading}
                    >
                        Update Extras
                    </button>
                </div>
            </form>
            <UploadFileModal
                modalTitle='Upload Credential'
                isOpen={openUploadModal}
                handleUploadClick={handleUploadCredentialClick}
                handleCancelClick={handleModalCancelClick}
            />
            <Modal
                isOpen={openRemoveCredentialModal}
            >
                <h4 className="mb-2 text-xl">
                    Are you sure you can remove the credential?
                </h4>
                <p className="mb-3">
                    This action can not be undone.
                </p>
                <div className="flex gap-4">
                    <button
                        className="secondary-btn"
                        onClick={() => setOpenRemoveCredentialModal(false)}
                        disabled={isAPILoading}
                    >
                        Cancel
                    </button>
                    <button
                        className="primary-btn"
                        disabled={isAPILoading}
                        onClick={() => handleRemoveCredential()}
                    >
                        Yes
                    </button>
                </div>
            </Modal>
            <Modal
                isOpen={openUpdatedDataModal}
            >
                <h4 className="mb-4">
                    Your data has been updated successfully
                </h4>
                <div className="flex gap-4">
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

export default ExtraInformation;
