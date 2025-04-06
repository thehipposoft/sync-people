import { useState } from 'react';
import { updateProfile } from '@/lib/protected-api';
import { PersonalInformationType } from '@/types';
import { AUSTRALIAN_STATES } from '@/app/constants';

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
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    return (
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
    )
};


export default PersonalInformation;
