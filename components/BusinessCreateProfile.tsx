import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BusinessCreateProfile = () => {
    return (
        <div>
            <div className='flex flex-col md:w-full'>
                <div className='flex justify-between px-4 py-2 w-full h-16'>
                    <Link href={'/'}>
                        <Image src={'/assets/logo.svg'} alt='Synto logo' width={180} height={140} />
                    </Link>
                    <div className='flex justify-end gap-6 py-1'>
                        <Link href={'/staff-market'}><button className='text-[#326B88] h-full border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Search Staff</button></Link>
                        <img src="/assets/images/business/mylk-logo.png" alt="Profile picture" className='rounded-full' />
                    </div>
                </div>
                <div className='bg-[#FAFAFB] w-full flex justify-center gap-12'>
                    <div className='flex flex-col rounded-2xl my-4 md:w-[900px] px-4 bg-white border'>
                        <div className='border-b'>
                            <h1 className='text-3xl h-bold py-3 pl-4'>Create profile</h1>
                        </div>
                        <h2 className='p-4 h-bold text-xl'>General information</h2>
                        <div className='flex justify-between'>
                            <div className='pt-4 pl-2'>
                                <Image src={'/assets/images/business/mylk-bg.png'} alt='Business picture' width={500} height={400} className='ml-6'/>
                            </div>
                            <div className='flex flex-col justify-around gap-1 text-center items-center pt-4 pr-16'>
                                <Image src={'/assets/images/business/mylk-logo.png'} alt='business logo' width={180} height={150} />
                                <div>
                                    <Image src={'/assets/images/profileStrength.png'} alt='percentage of strength' width={140} height={120} />
                                    <p className='h-bold'>Profile Strength</p>
                                    <p>Want to stand out?</p>
                                    <button className='text-[#326B88] border rounded-3xl border-[#326B88] px-6 py-1 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Go Premium!</button>
                                </div>
                            </div>
                        </div>
                        <form className='md:pt-12 px-6'>
                            <section className='flex gap-4'>
                                <div className='w-1/2'>
                                        <label htmlFor="name" className="block pb-2 p-bold">Company name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                        />
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="state" className="block pb-2 p-bold">Industry</label>
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
                            </section>

                            <section className='flex gap-4'>
                                <div className='w-1/2'>
                                    <label htmlFor="state" className="block pb-2 p-bold">Location (State)</label>
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
                                    <label htmlFor="address" className="block pb-2 p-bold">Location (City)</label>
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
                                    <label htmlFor="state" className="block pb-2 p-bold">Company Size</label>
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
                                    <label htmlFor="address" className="block pb-2 p-bold">Contact Person</label>
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
                                    <label htmlFor="phone" className="block pb-2 p-bold">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                    />
                                </div>

                                <div className='w-1/2'>
                                    <label htmlFor="email" className="block pb-2 p-bold">Contact Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                    />
                                </div>
                            </section>
                                <section className='flex flex-col'>
                                    <label htmlFor="about" className='pb-2 p-bold'>Company Description</label>
                                    <textarea name="" id="about" cols={6} rows={5} className='resize-none bg-[#F8F9FA] p-2'></textarea>
                                </section>
                                <div className='flex justify-end gap-2 my-8'>
                                    <Link href={'/business-profile'}>
                                        <button className=' py-2 hover:text-[#326B88] border-[#326B88] border rounded-md px-4 bg-[#326B88] hover:bg-white text-white duration-500 cursor-pointer'>
                                            Save
                                        </button>
                                    </Link>
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

export default BusinessCreateProfile;