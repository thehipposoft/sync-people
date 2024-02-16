import React from 'react';
import Image from "next/image";
import Link from "next/link";

const StaffSearch = () => {
    return (
        <div className=''>
            <div className='flex flex-col md:w-full'>
                <div className='flex justify-between px-4 py-2 w-full h-16'>
                    <Link href={'/'}>
                        <Image src={'/assets/logo.svg'} alt='Synto logo' width={180} height={140} />
                    </Link>
                    <div className='flex justify-end gap-6 py-1'>
                        <button className='text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Training and Licenses</button>
                        <button className='text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Search Jobs</button>
                        <img src="/assets/images/cv.png" alt="Profile picture" className='rounded-full' />
                    </div>
                </div>
                <div className='bg-[#FAFAFB] w-full flex justify-center gap-12'>
                    <div className='flex flex-col h-full'>
                        <div className="rounded-2xl my-4 md:w-[900px] bg-white border">
                            <div className='border-b'>
                                <h1 className='text-3xl h-bold py-3 pl-4'>Create an Active Staff Search</h1>
                            </div>
                            <div className='flex justify-between'>
                                <div className='pt-4 pl-2 flex items-center gap-8'>
                                    <Image src={'/assets/images/business/mylk-logo.png'} alt='Profile picture' width={160} height={160} className='ml-6 mt-4'/>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-2xl h-bold">Mylk Cafe</h2>
                                        <p>Brighton, VIC 3206</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1 text-center items-center py-6 pr-8'>
                                    <Image src={'/assets/images/profileStrength.png'} alt='percentage of strength' width={140} height={120} />
                                    <p className='h-bold'>Profile Strength</p>
                                    <p>Want to stand out?</p>
                                    <button className='text-[#326B88] border rounded-3xl border-[#326B88] px-6 py-1 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Go Premium!</button>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl my-4 md:w-[900px] bg-white border flex flex-col">
                            <div className="flex justify-between px-6 py-4 items-center border-b">
                                <h2 className="text-2xl h-bold">Staff Search Details</h2>
                                <p>Active</p>
                            </div>
                            <form className='md:pt-2 px-6'>
                                <section className='flex gap-4'>
                                    <div className='w-1/2'>
                                        <label htmlFor="job-title" className='block pb-2 h-bold'>Job title</label>
                                        <input
                                            type="text"
                                            id="job-title"
                                            name="job-title"
                                            required
                                        />
                                    </div>

                                    <div className='w-1/2'>
                                        <label htmlFor="role" className='block pb-2 h-bold'>Job Industry</label>
                                        <select name="role" id="role">
                                            <option value="role#1">Role#1</option>
                                            <option value="role#2">Role#2</option>
                                            <option value="role#3">Role#3</option>
                                            <option value="role#4">Role#4</option>
                                        </select>
                                    </div>
                                </section>
                                <section className='flex gap-4'>
                                    <div className='w-1/2'>
                                        <label className="block pb-2 h-bold">Job Location</label>
                                        <select
                                            name="job-location"
                                            className=""
                                        >
                                            <option value="1"> #1</option>
                                            <option value="2"> #2</option>
                                            <option value="3"> #3</option>

                                        </select>
                                    </div>
                                    <div className='w-1/2'>
                                        <label className="block pb-2 h-bold">Employment Type</label>
                                        <select
                                            name="employment-type"
                                            className=""
                                        >
                                            <option value="1"> #1</option>
                                            <option value="2"> #2</option>
                                            <option value="3"> #3</option>

                                        </select>
                                    </div>
                                </section>
                                <section className='flex gap-4'>
                                    <div className='w-1/2'>
                                        <label className="block pb-2 h-bold">Salary/Rate per hour</label>
                                        <select
                                            name="job-location"
                                            className=""
                                        >
                                            <option value="1"> #1</option>
                                            <option value="2"> #2</option>
                                            <option value="3"> #3</option>

                                        </select>
                                    </div>
                                    <div className='w-1/2'>
                                        <label htmlFor="availability_day" className="block pb-2 h-bold">Preferred Start Date</label>
                                        <input
                                            type="date"
                                            id="availability_day"
                                            name="availability_day"
                                            required
                                        />
                                    </div>
                                </section>
                                <section className='flex gap-4'>
                                    <div className='w-1/2'>
                                        <label className="mb-2 pb-2">Days Available</label>
                                        <div className='block'>
                                            <div className='flex items-center gap-2 '>
                                                <input
                                                    type="checkbox"
                                                    name="days"
                                                    value="monday"
                                                />
                                                <label className='text-black'>Monday</label>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <input
                                                    type="checkbox"
                                                    name="days"
                                                    value="Tuesday"
                                                />
                                                <label className='text-black'>Tuesday</label>
                                            </div>
                                            <div className='flex items-center gap-2 '>
                                                <input
                                                    type="checkbox"
                                                    name="days"
                                                    value="Wednesday"
                                                />
                                                <label className='text-black'>Wednesday</label>
                                            </div>
                                            <div className='flex items-center gap-2 '>
                                                
                                                <input
                                                    type="checkbox"
                                                    name="days"
                                                    value="Thursday"
                                                />
                                                <label className='text-black'>Thursday</label>
                                            
                                            </div>

                                            <div className='flex items-center gap-2'>
                                            
                                                <input
                                                    type="checkbox"
                                                    name="days"
                                                    value="Friday"
                                                />
                                                <label className='text-black'>Friday</label>
                                            </div>
                                            <div className='flex items-center gap-2 '>
                                            
                                                <input
                                                    type="checkbox"
                                                    name="days"
                                                    value="Saturday"
                                                />
                                                <label className='text-black'>Saturday</label>
                                            </div>
                                            <div className='flex items-center gap-2 '>
                                                
                                                <input
                                                    type="checkbox"
                                                    name="days"
                                                    value="Sunday"
                                                />
                                                <label className='text-black'>Sunday</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-1/2'>
                                        <div className="flex flex-col gap-2 mt-4">
                                            <h2 className="h-bold mt-2">Preferred Working Hours</h2>
                                            <div className="flex gap-4">
                                                <div className='w-full'>
                                                    <label htmlFor="industry" className='pb-2'>From</label>
                                                    <select name="industry" id="industry">
                                                        <option value="industry#1">#1</option>
                                                        <option value="industry#2">#2</option>
                                                        <option value="industry#3">#3</option>
                                                        <option value="industry#4">#4</option>
                                                    </select>
                                                </div>

                                                <div className='w-full'>
                                                    <label htmlFor="role" className='pb-2'>To</label>
                                                    <select name="role" id="role">
                                                        <option value="role#1">#1</option>
                                                        <option value="role#2">#2</option>
                                                        <option value="role#3">#3</option>
                                                        <option value="role#4">#4</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                            </section>
                            <section className='flex gap-4'>
 
                                </section>
                            
                            <section className='flex gap-4'>
                                <div className='w-1/2'>
                                    <label className="block pb-2 h-bold">Mobility requirement:</label>
                                    <select
                                        name="country"
                                        className=""
                                    >
                                        <option value="1"> #1</option>
                                        <option value="2"> #2</option>
                                        <option value="3"> #3</option>

                                    </select>
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="email" className="block pb-2 h-bold">Weekly Hours</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                    />
                                </div>
                            </section>
                                <section className='flex flex-col'>
                                    <label htmlFor="about" className='pb-2'>Additional Notes</label>
                                    <textarea name="" id="about" cols={6} rows={5} className='resize-none bg-[#F8F9FA] p-2'></textarea>
                                </section>
                                <div className='flex justify-end gap-2 my-8'>
                                    <Link href={'/business-profile'}>
                                        <button className=' py-2 hover:text-[#326B88] hover:bg-white border-[#326B88] border rounded-md px-4 bg-[#326B88]  text-white duration-500 cursor-pointer'>
                                            Save
                                        </button>
                                    </Link>
                                </div>
                        </form>
                        </div>
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

export default StaffSearch;