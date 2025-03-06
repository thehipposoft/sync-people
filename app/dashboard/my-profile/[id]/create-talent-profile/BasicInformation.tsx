import { useState } from 'react';
import { TalentTypeAcf } from '@/types';
import { AUSTRALIAN_STATES } from '@/app/constants';

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
    });

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

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex-col duration-1000 md:min-w-[850px] md:px-4 py-6`}
            style={{
                translate: `${-100 * currentIndex}%`,
            }}
        >
            <h4 className='font-bold py-4 text-xl pt-8'>
                1. Personal Information
            </h4>
            <p className='pb-4 text-[#1A335D] text-lg'>
                Now tell us a little bit about...
            </p>
            <div className={`md:grid grid-cols-2 gap-4`}>
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
                    <div className='flex justify-between'>
                        <label className='flex gap-1'>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                            />
                            Male
                        </label>
                        <label className='flex gap-1'>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                            />
                            Female
                        </label>
                        <label className='flex gap-1 '>
                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                            />
                                Other
                        </label>
                    </div>
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

                <h4 className='col-span-2 lg-col-span-1'>
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
                <div className='md:flex hidden justify-center mt-6'>
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
