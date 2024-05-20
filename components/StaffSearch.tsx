import React from 'react';
import Image from "next/image";
import Link from "next/link";

const StaffSearch = () => {
    return (
        <div className=''>
            <div className='flex flex-col md:w-full'>
            <div className='flex justify-between items-center px-8 py-2 w-full  bg-white'>
                <Link href={'/'} className='hidden md:block'>
                    <Image src={'/assets/logo.svg'} alt='Synto logo' width={180} height={140} />
                </Link>
                <div className='flex justify-end gap-6 py-1'>
                    <Link href={'/staff-market'}><button className='h-full text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Search Staff</button></Link>
                    <Link href={'/business-profile'}><button className='h-full text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>My Profile</button></Link>
                    <img src={"/assets/images/business/mylk-logo.png"} alt="Profile picture" className='rounded-full w-10' />
                </div>
            </div>
                <div className='bg-[#FAFAFB] w-full flex justify-center gap-12'>
                    <div className='flex flex-col h-full px-2 md:px-0'>
                        <div className="rounded-2xl my-4 md:w-[900px] bg-white border">
                            <div className='border-b'>
                                <h1 className='md:text-3xl text-2xl h-bold py-3 pl-4'>Create an Active Staff Search</h1>
                            </div>
                            <div className='flex justify-between'>
                                <div className='pt-4 pb-4 md:pb-0 md:pl-2 flex flex-col md:flex-row items-center gap-8'>
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
                                <section className='flex flex-col md:flex-row gap-4'>
                                    <div className='md:w-1/2'>
                                        <label htmlFor="job-title" className='block pb-2 h-bold'>Job title</label>
                                        <input
                                            type="text"
                                            id="job-title"
                                            name="job-title"
                                            required
                                        />
                                    </div>

                                    <div className='md:w-1/2'>
                                        <label htmlFor="role" className='block pb-2 h-bold'>Job Industry</label>
                                        <select name="role" id="role">
                                            <option value="role#1">Hospitality</option>
                                            <option value="role#2">Construction</option>
                                            <option value="role#3">Cleaning</option>
                                            <option value="role#4">Warehousing</option>
                                        </select>
                                    </div>
                                </section>
                                <section className='flex flex-col md:flex-row gap-4'>
                                    <div className='md:w-1/2'>
                                        <label className="block pb-2 h-bold">Job Location</label>
                                        <select
                                            name="job-location"
                                            className=""
                                        >
                                            <option value="1"> Victoria</option>
                                            <option value="2"> New South Wale</option>
                                            <option value="3"> Queensland</option>
                                            <option value="4"> South Australia</option>
                                            <option value="5"> Western Australia</option>
                                            <option value="6"> Northern Territory</option>

                                        </select>
                                    </div>
                                    <div className='md:w-1/2'>
                                        <label className="block pb-2 h-bold">Employment Type</label>
                                        <select
                                            name="employment-type"
                                            className=""
                                        >
                                            <option value="1"> Full-time</option>
                                            <option value="2"> Part-time</option>
                                            <option value="3"> Casual</option>
                                            <option value="4"> Contract/Temp</option>

                                        </select>
                                    </div>
                                </section>
                                <section className='flex flex-col md:flex-row gap-4'>
                                    <div className='md:w-1/2'>
                                        <label className="block pb-2 h-bold">Salary/Rate per hour</label>
                                        <select
                                            name="job-location"
                                            className=""
                                        >
                                            <option value="1"> $25.00 - $30.00</option>
                                            <option value="2"> $30.00 - $40.00</option>
                                            <option value="3"> $40.00 - $50.00</option>

                                        </select>
                                    </div>
                                    <div className='md:w-1/2'>
                                        <label htmlFor="availability_day" className="block pb-2 h-bold">Preferred Start Date</label>
                                        <input
                                            type="date"
                                            id="availability_day"
                                            name="availability_day"
                                            required
                                        />
                                    </div>
                                </section>
                                <section className='flex flex-col md:flex-row gap-4'>
                                    <div className='md:w-1/2'>
                                        <label className="mb-2 pb-2">Days Available</label>
                                        <div className='block'>
                                            <div className='flex items-center gap-2 '>
                                                <label className='text-black'>
                                                        <input
                                                            type="checkbox"
                                                            name="availability"
                                                            value="monday"
                                                            className='mr-2'
                                                        />
                                                            Monday
                                                </label>
                                            </div>
                                            <div className='flex items-center gap-2 '>
                                                <label className='text-black'>
                                                    <input
                                                        type="checkbox"
                                                        name="availability"
                                                        value="tuesday"
                                                        className='mr-2'
                                                    />
                                                        Tuesday
                                                </label>
                                            </div>
                                                <div className='flex items-center gap-2 '>
                                                    <label className='text-black'>
                                                        <input
                                                            type="checkbox"
                                                            name="availability"
                                                            value="wednesday"
                                                            className='mr-2'
                                                        />
                                                            Wednesday
                                                    </label>
                                            </div>
                                            <div className='flex items-center gap-2 '>
                                                <label className='text-black'>
                                                    <input
                                                        type="checkbox"
                                                        name="availability"
                                                        value="thursday"
                                                        className='mr-2'
                                                    />
                                                        Thursday
                                                </label>
                                            </div>
                                            <div className='flex items-center gap-2 '>
                                                <label className='text-black'>
                                                    <input
                                                        type="checkbox"
                                                        name="availability"
                                                        value="friday"
                                                        className='mr-2'
                                                    />
                                                        Friday
                                                </label>
                                            </div>
                                            <div className='flex items-center gap-2 '>
                                                <label className='text-black'>
                                                    <input
                                                        type="checkbox"
                                                        name="availability"
                                                        value="saturday"
                                                        className='mr-2'
                                                    />
                                                        Saturday
                                                </label>
                                            </div>
                                            <div className='flex items-center gap-2 '>
                                                <label className='text-black'>
                                                    <input
                                                        type="checkbox"
                                                        name="availability"
                                                        value="sunday"
                                                        className='mr-2'
                                                    />
                                                        Sunday
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='md:w-1/2'>
                                        <div className="flex flex-col gap-2 mt-4">
                                            <h2 className="h-bold mt-2">Preferred Working Hours</h2>
                                            <div className="flex gap-4">
                                                <div className='w-full'>
                                                    <label htmlFor="industry" className='pb-2'>From</label>
                                                    <select name="industry" id="industry">
                                                        <option value="industry#1">7 am</option>
                                                        <option value="industry#2">8 am</option>
                                                        <option value="industry#3">9 am</option>
                                                        <option value="industry#4">10 am</option>
                                                        <option value="industry#1">11 am</option>
                                                        <option value="industry#2">12 pm</option>
                                                        <option value="industry#3">1 pm</option>
                                                        <option value="industry#4">2 pm</option>
                                                        <option value="industry#1">3 pm</option>
                                                        <option value="industry#2">4 pm</option>
                                                        <option value="industry#3">5 pm</option>
                                                        <option value="industry#4">6 pm</option>
                                                    </select>
                                                </div>

                                                <div className='w-full'>
                                                    <label htmlFor="role" className='pb-2'>To</label>
                                                    <select name="role" id="role">
                                                        <option value="industry#3">1 pm</option>
                                                        <option value="industry#4">2 pm</option>
                                                        <option value="industry#1">3 pm</option>
                                                        <option value="industry#2">4 pm</option>
                                                        <option value="industry#3">5 pm</option>
                                                        <option value="industry#4">6 pm</option>
                                                        <option value="industry#4">7 pm</option>
                                                        <option value="industry#1">8 pm</option>
                                                        <option value="industry#2">9 pm</option>
                                                        <option value="industry#3">10 pm</option>
                                                        <option value="industry#4">11 pm</option>
                                                        <option value="industry#4">12 am</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                            </section>
                            <section className='flex flex-col md:flex-row gap-4'>
                                <div className='md:w-1/2'>
                                    <label className="block pb-2 h-bold">Mobility requirement:</label>
                                    <select
                                        name="country"
                                        className=""
                                    >
                                        <option value="1">Own vehicle</option>
                                        <option value="2">Public transport</option>
                                        <option value="3"> None</option>

                                    </select>
                                </div>
                                <div className='md:w-1/2'>
                                    <label htmlFor="email" className="block pb-2 h-bold">Weekly Hours</label>
                                    <input
                                        type="number"
                                        id="weekly-hours"
                                        name="weekly-hours"
                                        required
                                        defaultValue={40}
                                    />
                                </div>
                            </section>
                            <section className='flex flex-col'>
                                <label htmlFor="about" className='pb-2 mt-4 h-bold'>Additional Notes</label>
                                <textarea name="" id="about" cols={6} rows={5} className='resize-none bg-[#F8F9FA] p-2'></textarea>
                            </section>
                                <div className='flex justify-end gap-2 my-8'>
                                    <Link href={'/business-profile'}>
                                        <button className=' py-2 hover:text-[#326B88] hover:bg-white border-[#326B88] border rounded-md px-4 bg-[#326B88]  text-white duration-500 cursor-pointer'>
                                            Save
                                        </button>
                                    </Link>
                                    <Link href={'/staff-market'}>
                                        <button className=' py-2 hover:text-[#326B88] hover:bg-white border-[#326B88] border rounded-md px-4 bg-[#326B88]  text-white duration-500 cursor-pointer'>
                                            Market
                                        </button>
                                    </Link>
                                </div>
                        </form>
                        </div>
                    </div>
                    <div className='md:flex hidden flex-col my-4 gap-4'>
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