import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MyProfile = () => {
    return (
        <div className='flex'>
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
                    <div>
                        <div className='flex flex-col rounded-2xl my-4 mx-auto md:w-[900px] bg-white border'>
                            <div className={`bg-[url('/assets/images/profileBg.png')] bg-cover bg-center h-[300px] rounded-t-2xl relative`}>
                                <img src="/assets/images/cv.png" alt="Profile picture" className='rounded-full border-neutral-300 border w-[120px] h-[120px] absolute left-4 bottom-4' />
                            </div>
                            <div className='flex justify-between px-8 py-6'>
                                <div className='flex flex-col gap-3'>
                                    <h2 className='text-xl'>Diana Ross, 27 - Barista</h2>
                                    <p>International Student</p>
                                    <p>Brighton, VIC, 2306</p>
                                    <p>DOB: 20/08/1997</p>
                                    <p>0423 333 563</p>
                                    <p>diana.ross@gmail.com</p>
                                </div>
                                <div className='flex flex-col gap-2 text-cente items-center'>
                                    <Image src={'/assets/images/profileStrength.png'} alt='percentage of strength' width={120} height={120} />
                                    <p className='h-bold'>Profile Strength</p>
                                    <p>Want to stand out?</p>
                                    <button className='text-[#326B88] border rounded-3xl border-[#326B88] px-6 py-1'>Go Premium!</button>
                                </div>
                                <div className='flex flex-col text-right gap-4'>
                                    <div>
                                        <h2 className='text-xl'>Industries of Preference</h2>
                                        <p>Hospitality, Cleaning</p>
                                    </div>
                                    <div>
                                        <h2 className='text-xl'>Languages</h2>
                                        <p>English, French, Spanish</p>
                                    </div>
                                    <div>
                                        <h2 className='text-xl'>Licenses</h2>
                                        <p>RSA, Drivers's Licence</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col px-8 pb-6'>
                                <strong>About Diana</strong>
                                <p>Ex consectetur veniam eiusmod in laboris aliquip exercitation eu culpa elit laborum laboris consectetur incididunt dolor. Sit nostrud reprehenderit adipisicing officia anim dolor cupidatat veniam eiusmod. Veniam aute mollit irure dolor id eu quis irure sint. Aliqua ullamco elit laboris eu aliquip.</p>
                            </div>
                        </div>
                        <div className='flex flex-col rounded-2xl my-4 mx-auto w-[900px] bg-white px-8 py-6 border'>
                            <div className='flex justify-between'>
                                <h2 className='text-xl'>Work Experience</h2>
                                <button className='rounded-lg p-2 bg-[#f3f4f6]'>Sort by: Newest</button>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <h2 className='text-xl'>Barista</h2>
                                <p className='opacity-70'>Joe's Cafe</p>
                                <p className='opacity-70'>Apr 2022 - Dic 2023</p>
                                <p className='opacity-70'>Surfers Paradise, QLD 4217</p>
                                <p>Aliqua id aliquip pariatur veniam veniam voluptate id adipisicing Lorem labore pariatur aute anim proident non. Pariatur mollit enim do nostrud aliqua id do ex aliquip est occaecat laboris velit exercitation culpa exercitation pariatur id voluptate.</p>
                            </div>
                        </div>
                        <div className='flex flex-col rounded-2xl my-4 mx-auto w-[900px] bg-white px-8 py-6 border'>
                            <div className='flex justify-between'>
                                <h2 className='text-xl'>Job Searches</h2>
                                <button className='rounded-lg p-2 bg-[#f3f4f6]'>Sort by: Newest</button>
                            </div>
                            <div className='flex flex-col pt-4'>
                                <h2 className='text-xl'>Hospitality - Barista</h2>
                                <p className='opacity-70'>Mon, Tue, Thu, Fri, Sat - 40 hours p/w ($28 p/h)</p>
                                <p className='opacity-70'>From 16th March 2024</p>
                                <p className='opacity-70'>Brighton, VIC 3186</p>
                                <p>Recently moved to Melbourne from Gold Coast were I worked as a Barista for the last 3 months. 
                                    I also did a workshop where I learnt my barista skills. I hold an RSA Licence.</p>
                            </div>
                            <div className='pt-6'>
                                <Link href={'/job-search'}>
                                    <button className='bg-[#306987] hover:text-[#326B88] duration-500 border-[#326B88] border hover:bg-white py-2 px-4 text-white rounded-lg'>+ Add Job Search</button>
                                </Link>
                            </div>
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

export default MyProfile;       