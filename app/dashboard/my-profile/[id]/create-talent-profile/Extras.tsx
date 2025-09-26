import { useState } from "react";
import { TalentTypeAcf, CertificateType } from "@/types";
import { LEVEL_OF_ENGLISH, EDUCATION_LEVEL, LANGUAGES, SOCIAL_MEDIA_PLATFORMS } from "@/app/constants";
import { Select, SelectItem } from "@heroui/select";
import CertificateTable from "@/components/CertificatesTable";

type ExtrasPropsType = {
    currentIndex: number;
    initialValues: TalentTypeAcf;
    showNext: (values: TalentTypeAcf) => void;
    showPrev: () => void;
    setMainFormValues: (values: TalentTypeAcf) => void;
    userId: string;
}

 const Extras = ({
    currentIndex,
    initialValues,
    showNext,
    showPrev,
    setMainFormValues,
    userId,
}:ExtrasPropsType) => {
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<TalentTypeAcf['extras']>({
        ...initialValues.extras,
        certificates: initialValues.extras.certificates || [],
        social_media_links: initialValues.extras.social_media_links || [],
        other_urls: initialValues.extras.other_urls || [],
        level_of_english: initialValues.extras.level_of_english || 'beginner',
        transport: initialValues.extras.transport || 'no',
        education_level: initialValues.extras.education_level || 'No Formal Education'
    });

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAPILoading(true);

        setMainFormValues({
            ...initialValues,
            extras: formValues,
        });

        showNext({
            ...initialValues,
            extras: formValues,
        });
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
                <div className='flex items-center justify-between mt-8 mb-6'>
                    <h4 className='font-bold py-4 text-xl'>
                        Fantastic! you have reached the end of the form
                    </h4>
                </div>
                <div className={`md:grid flex flex-col md:grid-cols-2 md:gap-4 gap-8`}>
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
                        <label htmlFor="presentation_video" className="block pb-2">
                            Languages
                        </label>
                        <Select
                            className="col-span-2 multiselect"
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


                    <div className="col-span-2 mb-6">
                        <label htmlFor="other_credentials" className="block pb-2">
                            Other Credentials or Referrals
                        </label>
                        <p className="mb-2 text-sm">
                            You can upload any other credentials or referrals that you think might be relevant to your profile.
                        </p>
                        <CertificateTable
                            certificates={formValues.certificates}
                            industries={initialValues.professional_information.industries}
                            onLoadCompleted={handleCertificateLoaded}
                            userId={userId}
                            certificateParent='extras'
                        />
                    </div>

                    <div className="col-span-2 mb-3">
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
                                        placeholder="Your profile URL"
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
                </div>
                <div className='flex gap-4 items-center justify-center mt-10 mb-8'>
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
                        Finish
                    </button>
                </div>
            </form>
        </>
    );
 };

 export default Extras;
