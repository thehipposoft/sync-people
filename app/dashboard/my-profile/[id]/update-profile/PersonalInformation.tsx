import { useState } from 'react';
import { Link } from 'next-view-transitions';
import { updateProfile } from '@/lib/protected-api';
import { PersonalInformationType } from '@/types';
import { AUSTRALIAN_STATES, ROUTES } from '@/app/constants';
import Modal from '@/components/Modal';
import VideoRecorder from '@/components/VideoRecorder';
import { uploadPresentationVideo } from '@/lib/api';

type PersonalInformationPropsType = {
    initialValues: PersonalInformationType;
    userId: string;
};

const PersonalInformation = ({
    initialValues,
    userId,
}:PersonalInformationPropsType) => {
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<PersonalInformationType>(initialValues);
    const [openUpdatedDataModal, setOpenUpdatedDataModal] = useState<boolean>(false);
    const [recordedVideoBlob, setRecordedVideoBlob] = useState<Blob | null>(null);
    const [recordVideoModalOpen, setRecordVideoModalOpen] = useState<boolean>(false);
    const [removeVideoModalOpen, setRemoveVideoModalOpen] = useState<boolean>(false);
    const [uploadVideoError, setUploadVideoError] = useState<string | null>(null);
    const [apiError, setApiError] = useState<string | null>(null);

    const handleUpdatePersonalInformationClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAPILoading(true);
        setApiError('');

        const body: any = {
            personal_information: {
                ...formValues,
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
        setOpenUpdatedDataModal(true);
    };

    const handleRemoveVideoClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const body: any = {
            personal_information: {
                presentation_video: '',
            },
        };
        const response = await updateProfile(userId, body);

        if(response.status === 500) {
            setIsAPILoading(false);
        } else {
            setIsAPILoading(false);
            setRemoveVideoModalOpen(false);
            setRecordedVideoBlob(null);
            setFormValues((prevValues) => ({
                ...prevValues,
                presentation_video: '',
            }));
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setFormValues({
            ...formValues,
            current_location: {
                ...formValues.current_location,
                [e.target.name]: e.target.value,
            },
        });
    };

    const handleVideoReady = (blob: Blob) => {
        setUploadVideoError(null);
        setRecordedVideoBlob(blob);
        setRecordVideoModalOpen(false);

        uploadPresentationVideo(blob)
        .then(async response => {
            if (response.status === 200) {
                setFormValues((prevValues) => ({
                    ...prevValues,
                    presentation_video: response.data.secure_url,
                }));

                const updateProfileResponse = await updateProfile(userId, {
                    personal_information: {
                        presentation_video: response.data.secure_url,
                    },
                });
            } else {
                console.error('Failed to upload video:', response.message);
                setRecordedVideoBlob(blob);
                setRecordVideoModalOpen(false);
                setUploadVideoError('Error uploading video. Please try again.');
            }

        })
        .catch(error => {
            setUploadVideoError('Error uploading video. Please try again.');
        });
    };

    return (
        <>
            <form
                className='grid grid-cols-2 gap-4'
                onSubmit={handleUpdatePersonalInformationClick}
            >
                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="name" className="block pb-2">First Name</label>
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
                    <label htmlFor="name" className="block pb-2">Last Name</label>
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
                    <label htmlFor="mobile" className="block pb-2">Mobile</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        value={formValues.mobile}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="date_of_birth" className="block pb-2">Date of Birth</label>
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
                        <label className='flex gap-1'>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                onChange={handleInputChange}
                                checked={formValues.gender === 'Male'}
                            />
                            Male
                        </label>
                        <label className='flex gap-1'>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={handleInputChange}
                                checked={formValues.gender === 'Female'}
                            />
                            Female
                        </label>
                        <label className='flex gap-1 '>
                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                                onChange={handleInputChange}
                                checked={formValues.gender === 'Other'}
                            />
                                Other
                        </label>
                    </div>
                </div>

                <div className='col-span-2'>
                    <label htmlFor="country_of_birth" className="block pb-2">
                        Country of Birth
                    </label>
                    <input
                        type="text"
                        id="country_of_birth"
                        name="country_of_birth"
                        required
                        value={formValues.country_of_birth}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='col-span-2'>
                    <div className='flex gap-2 flex-col my-4'>
                        <p className="block text-xl font-bold">
                            Your Presentation Video
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
                            uploadVideoError && (
                                <p className='text-red-500'>
                                    {uploadVideoError}
                                </p>
                            )
                        }
                        {
                            recordedVideoBlob || formValues.presentation_video
                            ? <div>
                                <video
                                    className='w-full lg:w-1/2 lg:mx-auto h-auto rounded-lg'
                                    controls
                                    src={recordedVideoBlob ? URL.createObjectURL(recordedVideoBlob) : formValues.presentation_video}
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
                                            setRemoveVideoModalOpen(true);
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

                <h4 className='col-span-2 lg-col-span-1'>
                    Current Address
                </h4>
                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="address_1" className="block pb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address_1"
                        name="address_1"
                        value={formValues.current_location.address_1}
                        onChange={handleLocationChange}
                    />
                </div>

                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="suburb" className="block pb-2">
                        Suburb
                    </label>
                    <input
                        type="text"
                        id="suburb"
                        name="suburb"
                        value={formValues.current_location.suburb}
                        onChange={handleLocationChange}
                    />
                </div>

                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="state" className="block pb-2">
                        State
                    </label>
                    <select
                        id="state"
                        name="state"
                        value={formValues.current_location.state}
                        onChange={handleLocationChange}
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
                        id="postcode"
                        name="postcode"
                        value={formValues.current_location.postcode}
                        onChange={handleLocationChange}
                        maxLength={4}
                    />
                </div>

                {
                    apiError && (
                        <div className='col-span-2 p-2 border border-red-600 rounded-lg bg-red-200'>
                            <p className='text-red-500'>
                                Error: {apiError}
                            </p>
                        </div>
                    )
                }

                <div className='w-full col-span-2 flex'>
                    <button
                        className='primary-btn mt-4 mx-auto text-base'
                        type='submit'
                        disabled={isAPILoading}
                    >
                        Update Personal Information
                    </button>
                </div>
            </form>
            <Modal
                isOpen={openUpdatedDataModal}
                onClose={() => setOpenUpdatedDataModal(false)}
            >
                <h4 className="mb-4">
                    Your data has been updated successfully
                </h4>
                <div className="flex gap-4">
                    <button
                        className="secondary-btn w-full"
                        onClick={() => setOpenUpdatedDataModal(false)}
                    >
                        Keep editing
                    </button>
                    <a
                        className="primary-btn w-full"
                        href={`/talents/${userId}`}
                    >
                        View Public Portfolio
                    </a>
                </div>
            </Modal>
            <Modal
                isOpen={removeVideoModalOpen}
                onClose={() => setRemoveVideoModalOpen(false)}
            >
                <div className='flex flex-col gap-4'>
                    <h4 className='text-lg font-bold'>
                        Are you sure you want to remove your video?
                    </h4>
                    <p className=''>
                        This action cannot be undone.
                    </p>
                    <div className='flex gap-2'>
                        <button
                            className='danger-btn'
                            onClick={handleRemoveVideoClick}
                        >
                            Yes, remove video
                        </button>
                        <button
                            className='secondary-btn'
                            onClick={() => setRemoveVideoModalOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={recordVideoModalOpen}
                onClose={() => setRecordVideoModalOpen(false)}
            >
                <VideoRecorder onVideoReady={(blob) => handleVideoReady(blob)} />
            </Modal>
        </>
    )
};


export default PersonalInformation;
