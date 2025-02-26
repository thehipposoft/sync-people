import { useState } from 'react';
import { TalentTypeAcf } from '@/types';

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex-col duration-1000 md:min-w-[850px] md:px-4 py-6 md:py-0`}
            style={{
                translate: `${-100 * currentIndex}%`,
            }}
        >

            <h4 className='font-bold py-4 text-xl pt-8'>
                1. Basic Information
            </h4>
            <p className='pb-4 text-[#1A335D] text-lg'>
                Now tell us a little bit about...
            </p>
            <div className={`md:grid grid-cols-2 gap-4`}>
                <div className='col-span-2 lg:col-span-1'>
                    <label htmlFor="first_name" className="block pb-2">
                        First Name:
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
                    <label htmlFor="last_name" className="block pb-2">Last Name:</label>
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
                        Date of Birth
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
                    <label htmlFor="address" className="block pb-2">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        required
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
