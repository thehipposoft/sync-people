import React from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

const SideNav = () => {
    return (
            <div className='bg-[#19325d] md:w-[5vw] w-0 px-0 h-screen sticky flex left-0 top-0 flex-col gap-6 items-center pt-4'>
                <Image src={'/assets/images/vectors/hero-pic.svg'} alt='Syncto colors' width={45} height={30} className='md:w-auto w-[35px]'/>
                <div className='w-full'>
                    <Link href={'/'} className='cursor-pointer duration-500 hover:bg-[#334a71] flex justify-center py-3 w-full'>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='px-[2px]'>
                            <path d="M4.5 14.3998L16.5 4.7998L28.5 14.3998" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10"/>
                            <path d="M14.0996 27.1998L14.0996 20.7998H18.8996V27.1998" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10"/>
                            <path d="M7.69922 16L7.69922 24.8C7.69922 26.1256 8.77362 27.2 10.0992 27.2L22.8992 27.2C24.2248 27.2 25.2992 26.1256 25.2992 24.8L25.2992 16" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10" strokeLinecap="square"/>
                        </svg>
                    </Link>
                    <div className=' cursor-pointer duration-500 hover:bg-[#334a71] hidden justify-center py-3 w-full'>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='px-[2px]'>
                            <path d="M14.0996 26.9775C14.4102 27.3008 14.7828 27.558 15.1953 27.7337C15.6077 27.9094 16.0513 28 16.4996 28C16.9479 28 17.3916 27.9094 17.804 27.7337C18.2164 27.558 18.5891 27.3008 18.8996 26.9775" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10" strokeLinecap="square"/>
                            <path d="M24.4991 15.2V11.92C24.4358 9.8258 23.5701 7.83601 22.0812 6.36197C20.5923 4.88792 18.5939 4.04234 16.4991 4C14.3965 4.0604 12.3966 4.92264 10.9092 6.41004C9.42178 7.89744 8.55954 9.89737 8.49914 12L8.49914 15.2C8.49914 18.8 5.61914 19.44 5.61914 21.44C5.61914 23.28 9.85914 24.72 16.4991 24.72C23.1391 24.72 27.3791 23.28 27.3791 21.44C27.3791 19.44 24.4991 18.8 24.4991 15.2Z" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10" strokeLinecap="square"/>
                        </svg>
                    </div>
                    <div className='cursor-pointer duration-500 hover:bg-[#334a71] hidden justify-center py-3 w-full'>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='px-[2px]'>
                            <path d="M26.1 4.7998L6.9 4.7998C6.26348 4.7998 5.65303 5.05266 5.20294 5.50275C4.75286 5.95284 4.5 6.56329 4.5 7.1998L4.5 19.9998C4.5 20.6363 4.75286 21.2468 5.20294 21.6969C5.65303 22.1469 6.26348 22.3998 6.9 22.3998L12.5 22.3998L16.5 27.1998L20.5 22.3998H26.1C26.7365 22.3998 27.347 22.1469 27.7971 21.6969C28.2471 21.2468 28.5 20.6363 28.5 19.9998L28.5 7.1998C28.5 6.56329 28.2471 5.95284 27.7971 5.50275C27.347 5.05266 26.7365 4.7998 26.1 4.7998Z" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10" strokeLinecap="square"/>
                            <path d="M10.0996 11.2002L22.8996 11.2002" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10" strokeLinecap="square"/>
                            <path d="M10.0996 16H17.2996" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10" strokeLinecap="square"/>
                        </svg>
                    </div>
                    <div className='cursor-pointer duration-500 hover:bg-[#334a71] hidden justify-center py-3 w-full'>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='px-[2px]'>
                            <path d="M26.5834 7.51661C24.0274 4.96061 19.8826 4.96061 17.3266 7.51661C17.0114 7.83181 16.7378 8.17181 16.5002 8.52861C16.2626 8.17181 15.989 7.83181 15.6738 7.51741C13.1178 4.96141 8.973 4.96141 6.417 7.51741C3.861 10.0734 3.861 14.2182 6.417 16.7742L16.5002 26.8566L26.5834 16.7734C29.1394 14.2174 29.1394 10.0734 26.5834 7.51661Z" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10" strokeLinecap="square"/>
                        </svg>
                    </div>
                    <div className='cursor-pointer duration-500 hover:bg-[#334a71] hidden justify-center py-3 w-full'>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='px-[2px]'>
                            <path d="M26.1004 27.2L16.5004 21.6L6.90039 27.2L6.90039 6.4C6.90039 5.76348 7.15325 5.15303 7.60333 4.70294C8.05342 4.25286 8.66387 4 9.30039 4L23.7004 4C24.3369 4 24.9474 4.25286 25.3974 4.70294C25.8475 5.15303 26.1004 5.76348 26.1004 6.4L26.1004 27.2Z" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10" strokeLinecap="square"/>
                        </svg>
                    </div>
                    <div className='cursor-pointer duration-500 hover:bg-[#334a71] hidden justify-center py-3 w-full'>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='px-[2px]'>
                            <path d="M26.9004 26.4004L22.9004 22.4004" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10" strokeLinecap="square"/>
                            <path d="M8.5 13.6C8.5 12.1148 9.09 10.6904 10.1402 9.6402C11.1904 8.59 12.6148 8 14.1 8" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10"/>
                            <path d="M14.1008 22.3998C18.9609 22.3998 22.9008 18.4599 22.9008 13.5998C22.9008 8.7397 18.9609 4.7998 14.1008 4.7998C9.24068 4.7998 5.30078 8.7397 5.30078 13.5998C5.30078 18.4599 9.24068 22.3998 14.1008 22.3998Z" stroke="#DEE1E6" strokeWidth="1.92" strokeMiterlimit="10" strokeLinecap="square"/>
                        </svg>
                    </div>
                </div>








            </div>
    );
};

export default SideNav;
