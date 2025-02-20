import { useState } from 'react';
import { Link } from 'next-view-transitions';
import { updateProfile } from '@/lib/protected-api';
import { ExtraInformationType } from '@/types';
import { LEVEL_OF_ENGLISH, EDUCATION_LEVEL, LANGUAGES } from '@/app/constants';

type PersonalInformationPropsType = {
    initialValues: ExtraInformationType;
    userId: string;
};

const ExtraInformation = ({
    initialValues,
    userId,
}:PersonalInformationPropsType) => {
    console.log('>>initialValues', initialValues);
    const [formValues, setFormValues] = useState<ExtraInformationType>({
        ...initialValues,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form className='grid grid-cols-2 gap-4'>
            <div className='col-span-2'>
                <label htmlFor="more_about_myself" className="block pb-2">More About Myself</label>
                <textarea
                    rows={4}
                    id="more_about_myself"
                    name="more_about_myself"
                    required
                    value={formValues.more_about_myself}
                    onChange={handleInputChange}
                />
            </div>

            <div className=''>
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

            <div className=''>
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

            <div className=''>
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

            <div className=''>
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

            <div className=''>
                <label htmlFor="presentation_video" className="block pb-2">
                    Languages
                </label>
                {LANGUAGES.map((language) => (
                    <div key={language} className='flex gap-2'>
                        <input
                            type="checkbox"
                            id={language}
                            name={language}
                            required
                            checked={formValues.languages.includes(language)}
                            onChange={handleInputChange}
                        />
                        <label htmlFor={language}>{language}</label>
                    </div>
                ))}
            </div>

            <div className=''>
                <label htmlFor="presentation_video" className="block pb-2">
                    Presentation Video URL
                </label>
                <input
                    type="text"
                    id="presentation_video"
                    name="presentation_video"
                    required
                    value={formValues.presentation_video}
                    onChange={handleInputChange}
                />
            </div>

            <div className=''>
                <label htmlFor="other_credentials" className="block pb-2">
                    Other Credentials
                </label>

            </div>

            <div className=''>
                <label htmlFor="social_media_links" className="block pb-2">
                    Social Media Links
                </label>

            </div>
        </form>
    )
};

export default ExtraInformation;
