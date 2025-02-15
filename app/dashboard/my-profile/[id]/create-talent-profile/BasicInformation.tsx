import { TalentTypeAcf } from '@/types';

type BasicInformationPropsType = {
    currentIndex: number;
    isVisible: boolean;
    formValues: TalentTypeAcf;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>, section: 'personal_information' | 'professional_information' | 'working_rights' | 'current_location' | 'extras' | 'work_experience', field: string) => void;
}

const BasicInformation = ({
    currentIndex,
    isVisible,
    formValues,
    handleInputChange,
}:BasicInformationPropsType) => {
    return (
        <div
            className={`flex-col duration-1000 md:min-w-[850px] md:px-4 py-6 md:py-0`}
            style={{
                translate: `${-100 * currentIndex}%`,
            }}
        >
            <div className='flex items-center justify-between pt-8'>
                <h4 className='font-bold py-4 text-xl'>
                    1. Basic Information
                </h4>
            </div>
            <p className='pb-4 text-[#1A335D] text-lg'>
                Now tell us a little bit about...
            </p>
            <div className={`${isVisible ? 'md:block' : 'md:hidden'}`}>
                <div className='flex flex-col md:pt-2'>
                    <section className='flex flex-col md:flex-row gap-8'>
                        <div className='md:w-1/2'>
                            <label htmlFor="name" className="block pb-2">First Name:</label>
                            <input
                                type="text"
                                id="personal_information.first_name"
                                name="personal_information.first_name"
                                required
                                value={formValues.personal_information.first_name}
                                onChange={(e) => handleInputChange(e, 'personal_information', 'first_name')}
                            />
                        </div>

                        <div className='md:w-1/2'>
                            <label htmlFor="last_name" className="block pb-2">Last Name:</label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                required
                            />
                        </div>
                    </section>
                    <section className='flex flex-col md:flex-row gap-8'>
                        <div className="md:w-1/2 flex flex-col gap-2">
                            <label htmlFor="dob" >Date of Birth:</label>
                            <input type="date" name="dob" id="dob" />
                        </div>
                        <div className='md:w-1/2 flex flex-col gap-2 justify-center'>
                            <label>To which gender identity do you most identify?</label>
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
                    </section>

                    <section className='flex flex-col md:flex-row gap-8'>
                        <div className='md:w-1/2'>
                            <label htmlFor="email" className="block pb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className='md:w-1/2'>
                            <label htmlFor="phone" className="block pb-2">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                            />
                        </div>
                    </section>

                    <section className='flex flex-col md:flex-row gap-8'>
                        <div className='md:w-1/2'>
                            <label htmlFor="address" className="block pb-2">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                required
                            />
                        </div>
                        <div className='md:w-1/2'>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default BasicInformation;
