import { useState } from 'react';
import { Link } from 'next-view-transitions';
import { updateProfile } from '@/lib/protected-api';
import { ExtraInformationType } from '@/types';
import { LEVEL_OF_ENGLISH, EDUCATION_LEVEL, LANGUAGES } from '@/app/constants';
import UploadFileModal from '@/components/UploadFileModal';
import Modal from '@/components/Modal';
import { SOCIAL_MEDIA_PLATFORMS } from '@/app/constants';
import { format } from 'date-fns';
import { Select, SelectItem } from "@heroui/select";

type PersonalInformationPropsType = {
    initialValues: ExtraInformationType;
    userId: string;
};

const ExtraInformation = ({
    initialValues,
    userId,
}:PersonalInformationPropsType) => {
    const [openUploadModal, setOpenUploadModal] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<ExtraInformationType>({
        ...initialValues,
        other_credentials: initialValues.other_credentials || [],
        languages: initialValues.languages || [],
        social_media_links: initialValues.social_media_links || [],
        other_urls: initialValues.other_urls || [],
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

    const handleUploadCredentialClick = async (fileId: string, name: string, file_url: string, expiry_date?: string) => {
        const otherCredentials = [
            ...formValues.other_credentials,
            {
                certificate: fileId,
                name,
                file_url,
                expiry_date: expiry_date || '',
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

        const response = await updateProfile(userId, apiValues);

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

        const response = await updateProfile(userId, apiValues);

        setOpenRemoveCredentialModal(false);
        setIsAPILoading(false);
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAPILoading(true);

        const response = await updateProfile(userId, {
            extras: formValues,
        });

        setOpenUpdatedDataModal(true);

        setIsAPILoading(false);
    };

    const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        const languages: any[] = value.split(',');

        setFormValues({
            ...formValues,
            languages,
        });
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
                    <label htmlFor="transport" className="block pb-2">
                        Do you have your own transportation
                    </label>
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
                    <label htmlFor="languages" className="block pb-2">
                        Languages
                    </label>
                    <Select
                        className="col-span-2 mb-3 border rounded-xl border-[#656ED3]"
                        placeholder="Select one or more languages"
                        selectionMode="multiple"
                        onChange={handleMultiSelectChange}
                        required
                        items={LANGUAGES.map((language) => ({
                            key: language,
                            value: language,
                        }))}
                        selectedKeys={formValues.languages.map((language) => language)}
                    >
                        {LANGUAGES.map((language) => (
                            <SelectItem key={language}>
                                {language}
                            </SelectItem>
                        ))}
                    </Select>
                </div>

                <div className="col-span-2">
                    <label htmlFor="other_credentials" className="block pb-2">
                        Other Credentials or Referrals
                    </label>
                    <p className="mb-3 text-sm">
                        You can upload any other credentials or referrals that you think might be relevant to your profile.
                    </p>
                    {
                        formValues.other_credentials.length
                        ? <table className="w-full p-3 mb-2">
                            <thead>
                                <tr>
                                    <th
                                        className={`text-left py-2 px-4 md:px-2 bg-gray-300 rounded-tl-lg`}
                                    >
                                        Name
                                    </th>
                                    <th
                                        className={`text-left py-2 px-4 md:px-2 bg-gray-300`}
                                    >
                                        Expiry date
                                    </th>
                                    <th  className={`text-left py-2 px-4 md:px-2 bg-gray-300 rounded-tr-lg`}>

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {formValues.other_credentials.map((credential, index) => (
                                    <tr key={index} className='py-4 border'>
                                        <td
                                            className={`text-left py-3 text-sm px-4 md:px-2`}
                                        >
                                            {credential.name}
                                        </td>
                                        <td
                                            className={`text-left py-3 text-sm px-4 md:px-2`}
                                        >
                                            {format(credential.expiry_date, 'dd/MM/yyyy')}
                                        </td>
                                        <td className='text-right pr-4'>
                                            <button
                                                className="bg-red-500 p-1 rounded-md h-fit"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setCredentialToRemove(index);
                                                    setOpenRemoveCredentialModal(true);
                                                }}
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
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        : null
                    }

                    <button
                        className='primary-btn text-sm ml-0 my-3'
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenUploadModal(true)
                        }}
                    >
                        Add File
                    </button>
                </div>

                <div className="col-span-2">
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
                                    placeholder="Your profile URL"
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
                        className='primary-btn text-sm ml-0 my-3'
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
                        Add Social media
                    </button>
                </div>

                <div className="col-span-2">
                    <label htmlFor="social_media_links" className="block pb-2">
                        Other URLs
                    </label>
                    <p className="text-sm mb-2">
                        Add any other URLs you'd like to showcase in your profile, such as personal websites, online portfolios, blogs, or any relevant links that highlight your work or experience.
                    </p>
                    <ul className='flex flex-col gap-3'>
                        {formValues.other_urls.map((url, index) => (
                            <li key={index} className='flex gap-3 items-center'>
                                <input
                                    type="text"
                                    required
                                    value={url.name}
                                    placeholder="Name"
                                    className='text-sm'
                                    onChange={(e) => {
                                        const newSocialMediaLinks = formValues.other_urls.map((url, i) => {
                                            if (i === index) {
                                                return {
                                                    ...url,
                                                    name: e.target.value,
                                                };
                                            }

                                            return url;
                                        });

                                        setFormValues({
                                            ...formValues,
                                            other_urls: newSocialMediaLinks,
                                        });
                                    }}
                                />
                                <input
                                    type="text"
                                    required
                                    value={url.url}
                                    placeholder="URL"
                                    className='text-sm'
                                    onChange={(e) => {
                                        const newSocialMediaLinks = formValues.other_urls.map((url, i) => {
                                            if (i === index) {
                                                return {
                                                    ...url,
                                                    url: e.target.value,
                                                };
                                            }

                                            return url;
                                        });

                                        setFormValues({
                                            ...formValues,
                                            other_urls: newSocialMediaLinks,
                                        });
                                    }}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const newSocialMediaLinks = formValues.other_urls.filter((_, i) => i !== index);

                                        setFormValues({
                                            ...formValues,
                                            other_urls: newSocialMediaLinks,
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
                                ...formValues.other_urls,
                            ];
                            newSocialMediaLinks.push({
                                name: '',
                                url: '',
                            });

                            setFormValues({
                                ...formValues,
                                other_urls: newSocialMediaLinks,
                            });
                        }}
                    >
                        Add URL
                    </button>
                </div>

                <div className='w-full col-span-2 flex'>
                    <button
                        className='primary-btn mt-2 mx-auto text-base'
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
