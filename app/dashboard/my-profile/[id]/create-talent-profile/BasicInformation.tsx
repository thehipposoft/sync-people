import React, { useState, useMemo } from 'react';
import { TalentTypeAcf } from '@/types';
import { AUSTRALIAN_STATES } from '@/app/constants';
import { Link } from 'next-view-transitions';
import { ROUTES } from '@/app/constants';
import VideoRecorder from '@/components/VideoRecorder';
import Modal from '@/components/Modal';
import { updateProfile } from '@/lib/protected-api';

type BasicInformationPropsType = {
    currentIndex: number;
    initialValues: TalentTypeAcf;
    showNext: () => void;
    setMainFormValues: (values: TalentTypeAcf) => void;
    setRecordedVideoBlob: (blob: Blob | null) => void;
    recordedVideoBlob: Blob | null;
    userId: string;
}

const BasicInformation = ({
    currentIndex,
    initialValues,
    showNext,
    setMainFormValues,
    setRecordedVideoBlob,
    recordedVideoBlob,
    userId,
}:BasicInformationPropsType) => {
    const [formValues, setFormValues] = useState<TalentTypeAcf['personal_information']>({
        ...initialValues.personal_information,
    });

    const [recordVideoModalOpen, setRecordVideoModalOpen] = useState<boolean>(false);
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [apiError, setApiError] = useState<string | null>(null);

    const videoUrl = useMemo(() => {
        if (!recordedVideoBlob) return null;

        const url = URL.createObjectURL(recordedVideoBlob);
        return url;
    }, [recordedVideoBlob]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setMainFormValues({
            ...initialValues,
            personal_information: {
                ...formValues,
            },
        });

        const body: any = {
            personal_information: {
                ...formValues,
                 current_location: {
                    ...formValues.current_location,
                },
            },
        }

        delete body.personal_information.profile_pic;

        const response = await updateProfile(userId, body);

        if(response.status === 500) {
            setIsAPILoading(true);
            console.log('Internal Server Error');
            return;
        }

        if(response.data && response.data.status === 403) {
            setApiError(response.message);
            setIsAPILoading(false);
            return;
        }

        setIsAPILoading(false);

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

    const handleVideoReady = (blob: Blob) => {
        setRecordedVideoBlob(blob);
        setFormValues((prevValues) => ({
            ...prevValues,
            presentation_video: URL.createObjectURL(blob),
        }));
        setRecordVideoModalOpen(false);
    };

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
            <p className='pb-4 text-primary text-lg'>
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
                        value={formValues.date_of_birth || ''}
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
                                checked={formValues.gender === "Male"}
                                className='w-auto'
                            />
                            <p className='pl-1'>Male</p>
                        </label>
                        <label className='flex'>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={handleInputChange}
                                checked={formValues.gender === "Female"}
                                className='w-auto'
                            />
                            <p className='pl-1'>Female</p>
                        </label>
                        <label className='flex'>
                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                                onChange={handleInputChange}
                                checked={formValues.gender === "Other"}
                                className='w-auto'
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
                    <div className='flex gap-2 flex-col my-4'>
                        <p className="block text-xl font-bold">
                            Record your presentation video now
                        </p>
                        <div className='flex gap-2 flex-wrap'>
                            <p className=''>
                                Why Create a "presentation" Video?
                            </p>
                            <Link
                                className='text-primary underline'
                                href={ROUTES.PRESENTATION_VIDEO}
                                target='_blank'
                            >
                                Click here
                            </Link>
                        </div>
                        {
                            recordedVideoBlob
                            ? <div>
                                <video
                                    className='w-full lg:w-1/2 lg:mx-auto rounded-lg'
                                    controls
                                    height={410}
                                    src={videoUrl || ''}
                                />
                                <div className='flex items-center mx-auto my-6 gap-3 flex-wrap'>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setRecordVideoModalOpen(true);
                                        }}
                                        className="primary-btn"
                                    >
                                        Re-record Video
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setRecordedVideoBlob(null);
                                            setFormValues((prevValues) => ({
                                                ...prevValues,
                                                presentation_video: '',
                                            }));
                                        }}
                                        className="danger-btn"
                                    >
                                        Remove Video
                                    </button>
                                </div>
                            </div>
                            : <div className='flex items-center gap-2 mx-auto my-6'>
                                <div
                                    onClick={() => setRecordVideoModalOpen(true)}
                                    className="group cursor-pointer h-28 px-10 bg-primary hover:bg-white border-2 border-primary duration-500 flex gap-2 items-center text-white hover:text-primary rounded-3xl flex-col justify-center"
                                >
                                    <div className='p-1 bg-white w-fit rounded-full border-white border-2 group-hover:bg-white group-hover:border-primary transition-all duration-500'>
                                        <svg viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                        >
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    className='fill-primary transition-all duration-500'
                                                    d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#fff">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                    Record Video
                                </div>
                            </div>
                        }
                    </div>
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
            {
                apiError && (
                   <div className='col-span-2 p-2 border border-red-600 rounded-lg bg-red-200 mt-4'>
                        <p className='text-red-500'>
                            Error: {apiError}
                        </p>
                    </div>
                )
            }
            <div className='flex flex-col gap-4'>
                <div className='flex justify-center mt-6'>
                    {currentIndex + 1} | 4
                </div>
                <button
                    className='text-[#FF8149] py-2 px-4 mx-auto rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                    type='submit'
                    disabled={isAPILoading}
                >
                    Next
                </button>
            </div>
            <Modal
                isOpen={recordVideoModalOpen}
                onClose={() => setRecordVideoModalOpen(false)}
            >
                <VideoRecorder onVideoReady={(blob) => handleVideoReady(blob)} />
            </Modal>
        </form>
    );
};

export default BasicInformation;
