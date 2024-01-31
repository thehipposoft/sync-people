import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfileForm = () => {
    return (
        <div className=''>
            <div className='flex flex-col md:w-full'>
                <div className='flex justify-between px-4 py-2 w-full h-16'>
                    <Image src={'/assets/logo.svg'} alt='Synto logo' width={180} height={140} />
                    <div className='flex justify-end gap-6 py-1'>
                        <button className='text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Training and Licenses</button>
                        <button className='text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Search Jobs</button>
                        <img src="/assets/images/cv.png" alt="Profile picture" className='rounded-full' />
                    </div>
                </div>
                <div className='bg-[#FAFAFB] w-full flex justify-center gap-12'>
                    <div className='flex flex-col rounded-2xl my-4 md:w-[900px] bg-white border'>
                        <div className='border-b'>
                            <h1 className='text-3xl h-bold py-3 pl-4'>Create profile</h1>
                        </div>
                        <div className='flex justify-between'>
                            <div className='pt-4 pl-2'>
                                <h2 className='pl-4 h-bold text-xl'>General information</h2>
                                <Image src={'/assets/images/cv.png'} alt='Profile picture' width={160} height={160} className='ml-6 mt-4'/>
                            </div>
                            <div className='flex flex-col gap-1 text-center items-center pt-4 pr-8'>
                                <Image src={'/assets/images/profileStrength.png'} alt='percentage of strength' width={140} height={120} />
                                <p className='h-bold'>Profile Strength</p>
                                <p>Want to stand out?</p>
                                <button className='text-[#326B88] border rounded-3xl border-[#326B88] px-6 py-1 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Go Premium!</button>
                            </div>
                        </div>
                        <form className='md:pt-2 px-6'>
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

                                <div className='w-1/2 flex flex-col justify-center'>
                                    <label className="pb-1">To which gender identity do you most identify?</label>
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
                                <div className='w-1/2'>
                                    <label htmlFor="address" className="block pb-2">Address:</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        required
                                    />
                                </div>
                            </section>
                            <section className='flex gap-4'>

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
        
                            </section>

                            <section className='flex gap-4'>
                                <div className='w-1/2'>
                                    <label className="block pb-2">Citizenship:</label>
                                    <select
                                        name="country"
                                        className=" rounded"
                                    >
                                        <option value="1">Citizenship #1</option>
                                        <option value="2">Citizenship #2</option>
                                        <option value="3">Citizenship #3</option>

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
                                                <label className='text-black'>Logistics </label>
                                            
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
                                        <label className="mb-2 pb-2">Licenses</label>
                                        <div className='block'>
                                            <div className='flex items-center gap-2'>
                                                
                                                <input
                                                    type="checkbox"
                                                    name="licenses"
                                                    value="white-card"
                                                />
                                                <label className='text-black'>White Card</label>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                
                                                <input
                                                    type="checkbox"
                                                    name="licenses"
                                                    value="rsa"
                                                />
                                                <label className='text-black'>RSA</label>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                
                                                <input
                                                    type="checkbox"
                                                    name="licenses"
                                                    value="wwc"
                                                />
                                                <label className='text-black'>WWC</label>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                
                                                <input
                                                    type="checkbox"
                                                    name="licenses"
                                                    value="driver-license"
                                                />
                                                <label className='text-black'>Driver license</label>
                                            </div>

                                            <div className='flex items-center gap-2'>
                                                
                                                <input
                                                    type="checkbox"
                                                    name="licenses"
                                                    value="police-check"
                                                />
                                                <label className='text-black'>Police Check</label>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <input
                                                    type="checkbox"
                                                    name="licenses"
                                                    value="other"
                                                />
                                                <label className='text-black'>Other</label>
                                            </div>
                                            <input type="text" name="Other" id="other" className='mt-4' placeholder='Other' />
                                        </div>
                                    </div>
                            </section>
                            <section className='flex flex-col w-1/2'>
                                <label htmlFor="visa" className='pb-2'>Current Visa</label>
                                <select name="visa" id="visa">
                                    <option value="work-holiday">Work & Holiday</option>
                                    <option value="Visa#2">Visa#2</option>
                                    <option value="Visa#3">Visa#3</option>
                                    <option value="Visa#4">Visa#4</option>
                                </select>
                            </section>
                            <section className="w-1/2">
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
                                    <label htmlFor="about" className='pb-2'>Write about yourself</label>
                                    <textarea name="" id="about" cols={6} rows={5} className='resize-none bg-[#F8F9FA] p-2'></textarea>
                                </section>
                                <div className='flex justify-end gap-2 my-8'>
                                    <Link href={'/my-profile'}>
                                        <button className=' py-2 hover:text-[#326B88] border-[#326B88] border rounded-md px-4 bg-[#326B88] hover:bg-white text-white duration-500 cursor-pointer'>
                                            Save
                                        </button>
                                    </Link>
                                    <button className='py-2 text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>
                                        Add Work Experiece
                                        </button>
                                    <button className='py-2 text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>
                                        Search Jobs
                                    </button>
                                </div>
                        </form>
                    </div>
                    <div className='flex flex-col my-4 gap-4'>
                        <Image src={'/assets/images/publicity/ads-1.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-2.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-3.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-4.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-5.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-6.png'} alt='' width={200} height={150} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;