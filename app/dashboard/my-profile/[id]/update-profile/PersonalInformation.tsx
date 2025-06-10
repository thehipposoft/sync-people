import { useState } from 'react';
import { Link } from 'next-view-transitions';
import { updateProfile } from '@/lib/protected-api';
import { PersonalInformationType } from '@/types';
import { AUSTRALIAN_STATES, ROUTES } from '@/app/constants';
import Modal from '@/components/Modal';

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


    const handleUpdatePersonalInformationClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAPILoading(true);

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
        } else {
            setIsAPILoading(false);
            setOpenUpdatedDataModal(true);
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
                        value={formValues.date_of_birth}
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

                <h4 className='col-span-2 lg-col-span-1 mt-3'>
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
            <Modal isOpen={openUpdatedDataModal}>
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


export default PersonalInformation;
