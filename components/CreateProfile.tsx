import Image from 'next/image';
import React from 'react';


// *TO DO: Delete this form when not needed anymore*

const CreateProfile = () => {

    const handleChange = (e:any) => {
        const { name, value } = e.target;
      };

    return (
        <div>
            <form className='max-w-[1400px] grid grid-cols-10 px-10'>
                <div className='col-span-3 flex flex-col border px-4'>
                    <h1 className='text-3xl'>Create profile</h1>
                    <div className='flex gap-4'>
                        <Image src={'/assets/images/cv.jpg'} alt='Profile pic' width={30} height={30} className='rounded-full'/>
                        <button className='p-2 hover:bg-slate-300 duration-300 border-none rounded-2xl'>Change</button>
                        <button className='p-2 hover:bg-slate-300 duration-300 border-none rounded-2xl'>Remove</button>
                    </div>
                    <section className='flex flex-col'>
                        <label htmlFor="about" className='pb-2'>Write about yourself</label>
                        <textarea name="" id="about" cols={6} rows={5} className='resize-none bg-[#F8F9FA] p-2'></textarea>
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="visa" className='pb-2'>Current Visa</label>
                        <select name="visa" id="visa">
                            <option value="work-holiday">Work & Holiday</option>
                            <option value="Visa#2">Visa#2</option>
                            <option value="Visa#3">Visa#3</option>
                            <option value="Visa#4">Visa#4</option>
                        </select>
                    </section>
                    <section>
                        <label htmlFor="">What is your availability?</label> <br />
                        <div className='flex flex-wrap pt-2'>
                            <div className='border py-2 px-2 rounded-lg'>
                                <input type="checkbox" id='availability-1' name='availability' value={'Full-time'} />
                                <label htmlFor="availability-1" className='pl-1'>
                                    Full-time
                                </label>
                            </div>
                            <div className='border py-2 px-2 rounded-lg'>
                                <input type="checkbox" id='availability-2' name='availability' value={'Part-time'} />
                                <label htmlFor="availability-2" className='pl-1'>
                                    Part-time
                                </label>
                            </div>
                            <div className='border py-2 px-2 rounded-lg'>
                                <input type="checkbox" id='availability-3' name='availability' value={'Casual'} />
                                <label htmlFor="availability-3" className='pl-1'>
                                    Casual
                                </label>
                            </div>
                            <div className='border py-2 px-2 rounded-lg'>
                                <input type="checkbox" id='availability-4' name='availability' value={'Any'} />
                                <label htmlFor="availability-4" className='pl-1'>
                                    Any
                                </label>
                            </div>
                            <div className='border py-2 px-2 rounded-lg'>
                                <input type="checkbox" id='availability-5' name='availability' value={'Contract/Temp'} />
                                <label htmlFor="availability-5" className='pl-1'>
                                    Contract/Temp
                                </label>
                            </div>
                        </div>

                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="available-from" className='pb-2'>Available from</label>
                        <input type="date" name="available-from" id="available-from" />
                    </section>
                </div>
                <div className='col-span-7 border px-4'>
                    <div className='flex justify-between border px-6'>
                        <h1 className='text-3xl'>General information</h1>
                        <div>
                            <p>Active</p>
                        </div>
                    </div>
                    <section className='flex gap-4'>
                        <div className='w-1/2'>
                            <label htmlFor="name" className="block pb-2">First name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                />
                        </div>

                        <div className='w-1/2'>
                            <label htmlFor="last_name" className="block pb-2">Last name:</label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                required
                            />
                        </div>
                    </section>

                    <section className='flex gap-4'>
                        <div className='w-1/2'>
                            <label htmlFor="phone" className="block pb-2">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                            />
                        </div>

                        <div className='w-1/2'>
                            <label htmlFor="email" className="block pb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                    </section>

                    <section className='flex gap-4'>
                        <div className='w-1/2'>
                            <label htmlFor="date_of_birth" className="block pb-2">DOB:</label>
                            <input
                                type="date"
                                id="date_of_birth"
                                name="date_of_birth"
                                required
                            />
                        </div>

                        <div className='w-1/2'>
                            <label className="pb-4">To which gender identity do you most identify?</label>
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                    />
                                    <label className='pl-1'>
                                    Male
                                    </label>
                                </div>
                                <div className='flex items-center'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                    />
                                    <label className='pl-1'>Female</label>
                                </div>
                                <div className='flex items-center'>

                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Other"
                                    />
                                    <label className='pl-1'>Other</label>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='flex gap-4'>
                        <div className='w-1/2'>
                            <label htmlFor="address" className="block pb-2">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                required
                            />
                        </div>

                        <div className='w-1/4'>
                            <label htmlFor="state" className="block pb-2">State:</label>
                            <select
                                id="state"
                                name="state"
                            >
                                <option value="Victoria">Victoria</option>
                                <option value="New South Wales">New South Wales</option>
                                <option value="Queensland">Queensland</option>
                                <option value="South Australia">South Australia</option>
                                <option value="Western Australia">Western Australia</option>
                                <option value="Northern Territory">Northern Territory</option>
                            </select>
                        </div>
                        <div className='w-1/4' >
                            <label htmlFor="cp" className='block pb-2'>CP:</label>
                            <input type="text" id='cp' name='cp' />
                        </div>
                    </section>

                    <section className='flex gap-4'>
                        <div className='w-1/2'>
                            <label className="block pb-2">Languages:</label>
                            <select
                                multiple
                                name="languages"
                                className="rounded"
                            >
                                <option value="1">Language #1</option>
                                <option value="2">Language #2</option>
                                <option value="3">Language #3</option>
                                <option value="4">Language #4</option>
                                <option value="5">Language #5</option>
                            </select>
                        </div>

                        <div className='w-1/2'>
                            <label className="block pb-2">Level of English:</label>
                            <select
                                name="level"
                            >
                                <option value="1">Level #1</option>
                                <option value="2">Level #2</option>
                                <option value="3">Level #3</option>

                            </select>
                        </div>
                    </section>

                    <section className='flex gap-4'>
                        <div className='w-1/2'>
                            <label className="block pb-2">Country of Birth (opt):</label>
                            <select
                                name="country"
                                className=" rounded"
                            >
                                <option value="1">Contry #1</option>
                                <option value="2">Contry #2</option>
                                <option value="3">Contry #3</option>

                            </select>
                        </div>
                        <div className='w-1/2'>
                        <label className="block pb-2">Academic credentials (opt):</label>
                            <select
                                multiple
                                name="credentials"
                                className=" rounded"
                            >
                                <option value="1">Credential #1</option>
                                <option value="2">Credential #2</option>
                                <option value="3">Credential #3</option>
                                <option value="4">Credential #4</option>
                                <option value="5">Credential #5</option>
                            </select>
                        </div>

                    </section>

                    <section className='flex gap-4'>
                        <div className='w-1/2'>
                            <label className="mb-2 pb-2">Industries of choice</label>
                            <div className='block'>
                                <div className='flex items-center gap-2 '>
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="construction"
                                    />
                                    <label className='text-black'>Construction</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="cleaning"
                                    />
                                    <label className='text-black'>Cleaning</label>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="warehousing"
                                    />
                                    <label className='text-black'>Warehousing</label>
                                </div>
                                <div className='flex items-center gap-2 '>

                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="logistics"
                                    />
                                    <label className='text-black'>Logistics</label>

                                </div>

                                <div className='flex items-center gap-2'>

                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="farming"
                                    />
                                     <label className='text-black'>Farming / Solar farming</label>
                                </div>
                                <div className='flex items-center gap-2 '>

                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="hospitality"
                                    />
                                     <label className='text-black'>Hospitality</label>
                                </div>
                                <div className='flex items-center gap-2 '>

                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="Retail"
                                    />
                                    <label className='text-black'>retail</label>
                                </div>
                                <div className='flex items-center gap-2 '>

                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="age-care"
                                    />
                                    <label className='text-black'>Age Care</label>
                                </div>
                                <div className='flex items-center gap-2'>

                                    <input
                                        type="checkbox"
                                        name="industrie"
                                        value="other"
                                    />
                                    <label className='text-black'>Other</label>
                                </div>
                                <input type="text" name="Other" id="other" className='mt-4' placeholder='Other' />
                            </div>
                        </div>

                        <div className='w-1/2'>
                            <label className="mb-2 pb-2">Licences</label>
                            <div className='block'>
                                <div className='flex items-center gap-2'>

                                    <input
                                        type="checkbox"
                                        name="licences"
                                        value="white-card"
                                    />
                                    <label className='text-black'>White Card</label>
                                </div>
                                <div className='flex items-center gap-2'>

                                    <input
                                        type="checkbox"
                                        name="licences"
                                        value="rsa"
                                    />
                                    <label className='text-black'>RSA</label>
                                </div>
                                <div className='flex items-center gap-2'>

                                    <input
                                        type="checkbox"
                                        name="licences"
                                        value="wwc"
                                    />
                                    <label className='text-black'>WWC</label>
                                </div>
                                <div className='flex items-center gap-2'>

                                    <input
                                        type="checkbox"
                                        name="licences"
                                        value="driver-licence"
                                    />
                                    <label className='text-black'>Driver licence</label>
                                </div>

                                <div className='flex items-center gap-2'>

                                    <input
                                        type="checkbox"
                                        name="licences"
                                        value="police-check"
                                    />
                                    <label className='text-black'>Police Check</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type="checkbox"
                                        name="licences"
                                        value="other"
                                    />
                                    <label className='text-black'>Other</label>
                                </div>
                                <input type="text" name="Other" id="other" className='mt-4' placeholder='Other' />

                            </div>
                        </div>
                    </section>

                    <section className='flex gap-4'>
                        <div className='w-1/2 flex flex-col'>
                            <label htmlFor="transportation">Means of transportation</label>
                            <input type="text" name="transportation" id="transportation" />
                        </div>
                        <div>
                            <label htmlFor="experience">Do you have experience in your industry of choice?</label>
                        </div>
                    </section>
                    <div className='flex justify-end'>
                        <button
                            type="submit"
                            className="bg-primary text-white p-2 rounded hover:bg-white hover:text-primary duration-500 cursor-pointer my-8 relative right-0"
                            >
                            Save
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default CreateProfile;
