import Image from 'next/image';
import React from 'react';

const ClientDetail = () => {
    return (
        <div className='w-[350px] rounded-xl border relative'>
            <div className='bg-[#EBEFFF] relative left-0 top-0 h-[100px] w-full flex justify-center items-center'>
                <img src="/assets/images/vectors/cleaning.svg" alt="Cleaning" className='w-[50px] h-[50px] absolute top-5' />
            </div>
            <h2 className='py-6 text-center text-xl'>VIC CLEANING PTY LTD</h2>
            <div className='flex gap-2 pt-2 justify-center'>
                <div className='p-4 bg-[#EBEFFF] rounded-full'>
                    <Image src={'/assets/images/vectors/education.svg'} alt='icon' width={25} height={25} />
                </div>
                <div className='p-4 bg-[#EBEFFF] rounded-full'>
                    <Image src={'/assets/images/vectors/education.svg'} alt='icon' width={25} height={25} />
                </div>
                <div className='p-4 bg-[#EBEFFF] rounded-full'>
                    <Image src={'/assets/images/vectors/education.svg'} alt='icon' width={25} height={25} />
                </div>
            </div>
            <div className='px-3'>
                <h3 className='text-2xl py-4'>General Info</h3>
                <ul className='grid row-span-5 gap-5 pt-4'>
                    <li className='flex justify-between'>
                        <div className='flex gap-2'>
                            <svg width="25" height="25" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                            </svg>
                            <p>Status</p>
                        </div>
                        <span className='p-2 rounded-xl bg-[#EEFDF3]'>Active</span>
                    </li>
                    <li className='flex justify-between'>
                        <div className='flex gap-2'>
                        <svg width="25" height="25" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                            </svg>
                            <p>Contact</p>
                        </div>
                        <a href="">Ms. Kroger Rutherford <Image src={'/assets/images/vectors/conversation.svg'} alt='icon' width={10} height={10} /></a>
                    </li>
                    <li className='flex justify-between'>
                        <div className='flex gap-2'>
                        <svg width="25" height="25" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                            </svg>
                            <p>Phone number</p>
                        </div>
                        <a href="">(430) 065-7387</a>
                    </li>
                    <li className='flex justify-between'>
                        <div className='flex gap-2'>
                        <svg width="25" height="25" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                            </svg>
                            <p>Email</p>
                        </div>
                        <a href="">main@domain.com</a>
                    </li>
                    <li className='flex justify-between'>
                        <div className='flex gap-2'>
                            <svg width="25" height="25" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6663 28.3333V9.31658L10.5997 15.3833L7.33301 11.9999L18.9997 0.333252L30.6663 11.9999L27.3997 15.3833L21.333 9.31658V28.3333H16.6663ZM4.99968 37.6666C3.71634 37.6666 2.61734 37.2093 1.70268 36.2946C0.788011 35.3799 0.331456 34.2817 0.333012 32.9999V25.9999H4.99968V32.9999H32.9997V25.9999H37.6663V32.9999C37.6663 34.2833 37.209 35.3823 36.2943 36.2969C35.3797 37.2116 34.2815 37.6681 32.9997 37.6666H4.99968Z" fill="#9747FF"/>
                            </svg>
                            <p>Adress</p>
                        </div>
                        <p>St Kilda, VIC</p>
                    </li>
                </ul>
                <div className='pt-4'>
                    <p>New Activity</p>
                    <select name="activity" id="activity" className='p-2 my-4'>
                        <option value="activity-1">Activity #1</option>
                        <option value="activity-2">Activity #2</option>
                        <option value="activity-3">Activity #3</option>
                        <option value="activity-4">Activity #4</option>
                    </select>
                    <textarea name="" id="" cols={34} rows={8} placeholder='Text' className='resize-none bg-[#F8F9FA] p-2'></textarea>
                </div>
            </div>
        </div>
    );
};

export default ClientDetail;