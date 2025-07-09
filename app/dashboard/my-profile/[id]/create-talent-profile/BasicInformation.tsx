import React, { useState } from 'react';
import { TalentTypeAcf } from '@/types';
import { AUSTRALIAN_STATES } from '@/app/constants';
import { Link } from 'next-view-transitions';
import { ROUTES } from '@/app/constants';
import VideoRecorder from '@/components/VideoRecorder';

type BasicInformationPropsType = {
    currentIndex: number;
    initialValues: TalentTypeAcf;
    showNext: () => void;
    setMainFormValues: (values: TalentTypeAcf) => void;
}

const BasicInformation = ({
    currentIndex,
    initialValues,
    showNext,
    setMainFormValues,
}:BasicInformationPropsType) => {
    const [formValues, setFormValues] = useState<TalentTypeAcf['personal_information']>({
        ...initialValues.personal_information,
        current_location: {
            address_1: '',
            suburb: '',
            state: 'Victoria',
            postcode: '',
        },
    });

    const [recordedVideoBlob, setRecordedVideoBlob] = useState<Blob | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setMainFormValues({
            ...initialValues,
            personal_information: {
                ...formValues,
            },
        });

        showNext();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
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

    console.log('recordedVideoBlob', recordedVideoBlob)

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex-col duration-1000 min-w-[90vw] max-w-[90vw] md:max-w-[850px] md:min-w-[850px] px-4 py-6`}
            style={{
                translate: `${-100 * currentIndex}%`,
            }}
        >
            <h4 className='font-bold py-4 text-xl pt-8 md:pt-6'>
                1. Personal Information
            </h4>
            <p className='pb-4 text-[#1A335D] text-lg'>
                Now tell us a little bit about...
            </p>
            <div className={`md:grid flex flex-col grid-cols-2 md:gap-4 gap-8`}>
                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="first_name" className="block pb-2">
                        First Name*
                    </label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        required
                        value={formValues.first_name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="last_name" className="block pb-2">
                        Last Name*
                    </label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        required
                        value={formValues.last_name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="email" className="block pb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formValues.email}
                        onChange={handleInputChange}
                        disabled
                    />
                </div>

                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="mobile" className="block pb-2">
                        Mobile
                    </label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formValues.mobile}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="date_of_birth" className="block pb-2">
                        Date of Birth*
                    </label>
                    <input
                        type="date"
                        id="date_of_birth"
                        name="date_of_birth"
                        required
                        value={formValues.date_of_birth}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='col-span-2 lg:col-span-1'>
                    <label className="block pb-2">
                        To which gender identity do you most identify?
                    </label>
                    <div className='flex md:flex-row flex-col items-start gap-4 mt-1'>
                        <label className='flex'>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                onChange={handleInputChange}
                            />
                            <p className='pl-1'>Male</p>
                        </label>
                        <label className='flex'>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={handleInputChange}
                            />
                            <p className='pl-1'>Female</p>
                        </label>
                        <label className='flex'>
                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                                onChange={handleInputChange}
                            />
                            <p className='pl-1'>Other</p>
                        </label>
                    </div>
                </div>

                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="country_of_birth" className="block pb-2">
                        Country of Birth
                    </label>
                    <input
                        id="country_of_birth"
                        name="country_of_birth"
                        value={formValues.country_of_birth}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='col-span-2'>
                    <label htmlFor="about_myself" className="block pb-2">
                        About me
                    </label>
                    <textarea
                        rows={4}
                        placeholder='Write a short description about yourself'
                        name='about_myself'
                        spellCheck={true}
                        id='about_myself'
                        className='flex w-full border p-2 resize-none'
                        value={formValues.about_myself}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='col-span-2 lg:col-span-1'>
                    <div className='flex gap-2 mb-2 flex-col'>
                        <label htmlFor="presentation_video" className="block">
                            Presentation Video URL
                        </label>
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
                </div>

                <div className='col-span-2 lg:col-span-1 flex flex-col items-center justify-center mb-2'>
                    <p className=''>
                        Why Create a "presentation" Video?
                    </p>
                    <Link
                        className='text-primary-text underline'
                        href={ROUTES.PRESENTATION_VIDEO}
                        target='_blank'
                    >
                        Click here
                    </Link>
                </div>
                <div className='col-span-2 lg:col-span-2'>
                    <div className='flex gap-2 mb-2 flex-col'>
                        <label htmlFor="presentation_video" className="block">
                            Record your presentation video now
                        </label>
                        <p className='text-sm opacity-70 my-2'>
                            The video should be 30 to 60 seconds long, introducing yourself and your professional profile.<br /> Keep it simple and relaxed.<br /> This video will be used to create your profile.
                        </p>
                    </div>
                    <VideoRecorder onVideoReady={(blob) => setRecordedVideoBlob(blob)} />

                    {recordedVideoBlob && (
                        <video
                            controls
                            src={URL.createObjectURL(recordedVideoBlob)}
                            className="mt-4 rounded shadow w-full max-w-md"
                        />
                        )}
                </div>
                <h4 className='col-span-2 lg-col-span-1 mt-3'>
                    Current Address
                </h4>

                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="current_location.address_1" className="block pb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        id="current_location.address_1"
                        name="current_location.address_1"
                        value={formValues.current_location.address_1}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="suburb" className="block pb-2">
                        Suburb
                    </label>
                    <input
                        type="text"
                        id="current_location.suburb"
                        name="current_location.suburb"
                        value={formValues.current_location.suburb}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="state" className="block pb-2">
                        State
                    </label>
                    <select
                        id="current_location.state"
                        name="current_location.state"
                        value={formValues.current_location.state}
                        onChange={handleInputChange}
                    >
                        {AUSTRALIAN_STATES.map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="postcode" className="block pb-2">
                        Postcode
                    </label>
                    <input
                        type='number'
                        id="current_location.postcode"
                        name="current_location.postcode"
                        value={formValues.current_location.postcode}
                        onChange={handleInputChange}
                        maxLength={4}
                    />
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-center mt-6'>
                    {currentIndex + 1} | 4
                </div>
                <button
                    className='text-[#FF8149] py-2 px-4 mx-auto rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                    type='submit'
                >
                    Next
                </button>
            </div>

        </form>
    );
};

export default BasicInformation;
