import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MyProfile = ({ user }:any) => {
    return (
        <div className='flex'>
            <div className='flex flex-col md:w-full'>
                {
                    user === 'business' ?
                    <div className='flex justify-between items-center px-8 py-2 w-full  bg-white'>
                        <Link href={'/'}>
                            <Image src={'/assets/logo.svg'} alt='Synto logo' width={180} height={140} />
                        </Link>
                        <div className='flex justify-end gap-6 py-1'>
                            <Link href={'/business-profile'}><button className='h-full text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>My Profile</button></Link>
                            <Link href={'/staff-market'}><button className='h-full text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Search Staff</button></Link>
                            <img src={"/assets/images/business/mylk-logo.png"} alt="Profile picture" className='rounded-full w-10' />
                        </div>
                    </div>
                    :
                    <div className='flex justify-between items-center px-8 py-2 w-full bg-white'>
                        <Link href={'/'}>
                            <Image src={'/assets/logo.svg'} alt='Synto logo' width={180} height={140} />
                        </Link>
                        <div className='flex justify-end gap-6 py-1'>
                            <Link href={'/training-and-licences'}><button className='h-full text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Training and Licences</button></Link>
                            <Link href={'/business-market'}><button className='h-full text-[#326B88] border-[#326B88] border rounded-md px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Search Jobs</button></Link>
                            <img src="/assets/images/cv.png" alt="Profile picture" className='rounded-full w-10' />
                        </div>
                    </div>
                }
                <div className='bg-[#FAFAFB] w-full flex justify-center gap-12'>
                    <div>
                        <div className='flex flex-col rounded-2xl my-4 mx-auto md:w-[900px] bg-white border'>
                            <div className={`bg-[url('/assets/images/profileBg.png')] bg-cover bg-center h-[300px] rounded-t-2xl relative`}>
                                <img src="/assets/images/cv.png" alt="Profile picture" className='rounded-full border-neutral-300 border w-[120px] h-[120px] absolute left-4 bottom-4' />
                            </div>
                            <div className='flex justify-between px-8 py-6'>
                                <div className='flex flex-col gap-3'>
                                    {
                                        user === 'business' ?
                                        <h2 className='text-xl'>Diana, 27 - Barista</h2>
                                        :
                                        <h2 className='text-xl'>Diana Ross, 27 - Barista</h2>
                                    }
                                    <p>International Student</p>
                                    <p>Brighton, VIC, 2306</p>
                                    <p>DOB: 20/08/1997</p>
                                    <div className={`${user === 'business' ? 'hidden' : ''} flex gap-2`}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.8359 11.8754L11.0008 13.6857C10.0438 13.1086 9.15474 12.4258 8.35047 11.6499C7.57582 10.8443 6.89306 9.95516 6.31475 8.99879L8.12332 7.16365C8.23286 7.05242 8.30683 6.91112 8.33583 6.75772C8.36484 6.60432 8.34755 6.44577 8.28618 6.30222L6.40047 1.9068C6.32597 1.73348 6.19169 1.5927 6.02208 1.5101C5.85248 1.4275 5.65885 1.40858 5.47647 1.4568L2.01875 2.37137C1.84608 2.41613 1.69371 2.51818 1.58658 2.66081C1.47946 2.80344 1.42391 2.9782 1.42904 3.15651C1.64904 7.17803 3.32114 10.983 6.13475 13.8648C9.01705 16.6793 12.8231 18.3517 16.8456 18.5714C17.0241 18.5774 17.1993 18.5223 17.3422 18.4152C17.4851 18.3081 17.5872 18.1555 17.6316 17.9825L18.5453 14.5231C18.5938 14.3408 18.5751 14.1472 18.4926 13.9775C18.4102 13.8079 18.2695 13.6736 18.0962 13.5991L13.6999 11.7142C13.5562 11.652 13.3972 11.634 13.2433 11.6627C13.0893 11.6915 12.9475 11.7655 12.8359 11.8754Z" stroke="#326B88" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                                        </svg>
                                        <p>0423 333 563</p>
                                    </div>
                                    <div className={`${user === 'business' ? 'hidden' : ''} flex gap-2`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9999 15.4284C13.8934 15.4284 15.4284 13.8934 15.4284 11.9999C15.4284 10.1063 13.8934 8.57129 11.9999 8.57129C10.1063 8.57129 8.57129 10.1063 8.57129 11.9999C8.57129 13.8934 10.1063 15.4284 11.9999 15.4284Z" stroke="#326B88" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                                            <path d="M15.4287 19.8579C13.7371 20.5962 11.8524 20.7687 10.0549 20.3499C8.25743 19.931 6.64313 18.9432 5.45214 17.5332C4.26114 16.1232 3.55707 14.3665 3.44464 12.5242C3.3322 10.682 3.81741 8.85269 4.82811 7.30835C5.8388 5.76401 7.32098 4.58716 9.05421 3.95282C10.7874 3.31848 12.6791 3.26053 14.4479 3.78761C16.2167 4.31469 17.7682 5.39862 18.8715 6.87821C19.9748 8.35779 20.571 10.154 20.5716 11.9997V12.8568C20.5716 13.5388 20.3007 14.1928 19.8184 14.6751C19.3362 15.1573 18.6821 15.4282 18.0001 15.4282C17.3182 15.4282 16.6641 15.1573 16.1819 14.6751C15.6996 14.1928 15.4287 13.5388 15.4287 12.8568V8.57108" stroke="#326B88" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                                        </svg>
                                        <p>diana.ross@gmail.com</p>
                                    </div>
                                    <div className={`${user === 'business' ? '' : 'hidden'} flex gap-2 pt-4`}>
                                        <button className='h-full flex items-center border-[#326B88] border rounded-md px-4 py-2 bg-[#326B88] text-white duration-500 cursor-pointer sync-button'>
                                            <svg width="20" height="20" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1 pr-1'>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1251 1C12.2354 1 10.4231 1.75067 9.08695 3.08686C7.75075 4.42306 7.00008 6.23533 7.00008 8.125C7.00008 10.0147 7.75075 11.8269 9.08695 13.1631C10.4231 14.4993 12.2354 15.25 14.1251 15.25C16.0148 15.25 17.827 14.4993 19.1632 13.1631C20.4994 11.8269 21.2501 10.0147 21.2501 8.125C21.2501 6.23533 20.4994 4.42306 19.1632 3.08686C17.827 1.75067 16.0148 1 14.1251 1ZM9.25008 8.125C9.25008 6.83207 9.7637 5.59209 10.6779 4.67785C11.5922 3.76361 12.8322 3.25 14.1251 3.25C15.418 3.25 16.658 3.76361 17.5722 4.67785C18.4865 5.59209 19.0001 6.83207 19.0001 8.125C19.0001 9.41793 18.4865 10.6579 17.5722 11.5721C16.658 12.4864 15.418 13 14.1251 13C12.8322 13 11.5922 12.4864 10.6779 11.5721C9.7637 10.6579 9.25008 9.41793 9.25008 8.125ZM14.1251 17.5C10.6556 17.5 7.45758 18.289 5.08908 19.621C2.75508 20.935 1.00008 22.924 1.00008 25.375V25.528C0.998584 27.271 0.997084 29.458 2.91558 31.021C3.85908 31.789 5.18058 32.3365 6.96558 32.6965C8.75358 33.0595 11.0861 33.25 14.1251 33.25C17.1641 33.25 19.4951 33.0595 21.2861 32.6965C23.0711 32.3365 24.3911 31.789 25.3361 31.021C27.2546 29.458 27.2516 27.271 27.2501 25.528V25.375C27.2501 22.924 25.4951 20.935 23.1626 19.621C20.7926 18.289 17.5961 17.5 14.1251 17.5ZM3.25008 25.375C3.25008 24.0985 4.18308 22.7125 6.19158 21.583C8.16558 20.473 10.9676 19.75 14.1266 19.75C17.2826 19.75 20.0846 20.473 22.0586 21.583C24.0686 22.7125 25.0001 24.0985 25.0001 25.375C25.0001 27.337 24.9401 28.441 23.9141 29.275C23.3591 29.728 22.4291 30.1705 20.8391 30.4915C19.2536 30.8125 17.0861 31 14.1251 31C11.1641 31 8.99508 30.8125 7.41108 30.4915C5.82108 30.1705 4.89108 29.728 4.33608 29.2765C3.31008 28.441 3.25008 27.337 3.25008 25.375Z" fill="#FFF" stroke="" stroke-width="1.5"/>
                                            </svg>
                                            Sync & Connect
                                        </button>
                                        <button className='h-full flex text-[#326B88] border-[#326B88] border rounded-md px-3 py-2 duration-500 cursor-pointer fav-button'>
                                            <svg width="25" height="25" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='pr-1'>
                                                <path d="M26.5834 7.51661C24.0274 4.96061 19.8826 4.96061 17.3266 7.51661C17.0114 7.83181 16.7378 8.17181 16.5002 8.52861C16.2626 8.17181 15.989 7.83181 15.6738 7.51741C13.1178 4.96141 8.973 4.96141 6.417 7.51741C3.861 10.0734 3.861 14.2182 6.417 16.7742L16.5002 26.8566L26.5834 16.7734C29.1394 14.2174 29.1394 10.0734 26.5834 7.51661Z" stroke="#326B88" stroke-width="1.92" stroke-miterlimit="10" stroke-linecap="square"/>
                                            </svg>
                                            Add to Saved List
                                        </button>
                                    </div>
                                </div>
                                <div className={` ${user === 'business' ? 'hidden' : ''} flex flex-col gap-2 text-cente items-center`}>
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
                                        <h2 className='text-xl'>Licences</h2>
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
                            <div className={`${user === 'business' ? 'hidden' : ''} pt-6`}>
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