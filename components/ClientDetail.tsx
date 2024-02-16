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
                    <Image src={'/assets/images/vectors/Chat.svg'} alt='icon' width={25} height={25} />
                </div>
                <div className='p-4 bg-[#EBEFFF] rounded-full'>
                    <Image src={'/assets/images/vectors/phone.svg'} alt='icon' width={25} height={25} />
                </div>
            </div>
            <div className='px-3'>
                <h3 className='text-2xl py-4'>General Info</h3>
                <ul className='grid row-span-5 gap-5 pt-4'>
                    <li className='flex justify-between'>
                        <div className='flex gap-2'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9999 21.4284C17.2071 21.4284 21.4284 17.2071 21.4284 11.9999C21.4284 6.7926 17.2071 2.57129 11.9999 2.57129C6.7926 2.57129 2.57129 6.7926 2.57129 11.9999C2.57129 17.2071 6.7926 21.4284 11.9999 21.4284Z" stroke="#326B88" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                            <path d="M12 11.1426L12 16.2854" stroke="#326B88" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                            <path d="M11.9997 8.57171C12.4731 8.57171 12.8569 8.18795 12.8569 7.71456C12.8569 7.24118 12.4731 6.85742 11.9997 6.85742C11.5263 6.85742 11.1426 7.24118 11.1426 7.71456C11.1426 8.18795 11.5263 8.57171 11.9997 8.57171Z" fill="#326B88"/>
                        </svg>

                            <p>Status</p>
                        </div>
                        <span className='p-2 rounded-xl bg-[#EEFDF3]'>Active</span>
                    </li>
                    <li className='flex justify-between'>
                        <div className='flex gap-2'>
                        <svg width="26" height="26" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 14.3998L16.5 4.7998L28.5 14.3998" stroke="#3EC1AA" stroke-width="1.92" stroke-miterlimit="10"/>
                            <path d="M14.0996 27.1998L14.0996 20.7998H18.8996V27.1998" stroke="#3EC1AA" stroke-width="1.92" stroke-miterlimit="10"/>
                            <path d="M7.69922 16L7.69922 24.8C7.69922 26.1256 8.77362 27.2 10.0992 27.2L22.8992 27.2C24.2248 27.2 25.2992 26.1256 25.2992 24.8L25.2992 16" stroke="#3EC1AA" stroke-width="1.92" stroke-miterlimit="10" stroke-linecap="square"/>
                        </svg>

                            <p>Contact</p>
                        </div>
                        <a href="">Ms. Kroger Rutherford <Image src={'/assets/images/vectors/conversation.svg'} alt='icon' width={10} height={10} /></a>
                    </li>
                    <li className='flex justify-between'>
                        <div className='flex gap-2'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8359 11.8754L11.0008 13.6857C10.0438 13.1086 9.15474 12.4258 8.35047 11.6499C7.57582 10.8443 6.89306 9.95516 6.31475 8.99879L8.12332 7.16365C8.23286 7.05242 8.30683 6.91112 8.33583 6.75772C8.36484 6.60432 8.34755 6.44577 8.28618 6.30222L6.40047 1.9068C6.32597 1.73348 6.19169 1.5927 6.02208 1.5101C5.85248 1.4275 5.65885 1.40858 5.47647 1.4568L2.01875 2.37137C1.84608 2.41613 1.69371 2.51818 1.58658 2.66081C1.47946 2.80344 1.42391 2.9782 1.42904 3.15651C1.64904 7.17803 3.32114 10.983 6.13475 13.8648C9.01705 16.6793 12.8231 18.3517 16.8456 18.5714C17.0241 18.5774 17.1993 18.5223 17.3422 18.4152C17.4851 18.3081 17.5872 18.1555 17.6316 17.9825L18.5453 14.5231C18.5938 14.3408 18.5751 14.1472 18.4926 13.9775C18.4102 13.8079 18.2695 13.6736 18.0962 13.5991L13.6999 11.7142C13.5562 11.652 13.3972 11.634 13.2433 11.6627C13.0893 11.6915 12.9475 11.7655 12.8359 11.8754Z" stroke="#326B88" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                        </svg>

                            <p>Phone number</p>
                        </div>
                        <a href="">(430) 065-7387</a>
                    </li>
                    <li className='flex justify-between'>
                        <div className='flex gap-2'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9999 15.4284C13.8934 15.4284 15.4284 13.8934 15.4284 11.9999C15.4284 10.1063 13.8934 8.57129 11.9999 8.57129C10.1063 8.57129 8.57129 10.1063 8.57129 11.9999C8.57129 13.8934 10.1063 15.4284 11.9999 15.4284Z" stroke="#326B88" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                            <path d="M15.4287 19.8579C13.7371 20.5962 11.8524 20.7687 10.0549 20.3499C8.25743 19.931 6.64313 18.9432 5.45214 17.5332C4.26114 16.1232 3.55707 14.3665 3.44464 12.5242C3.3322 10.682 3.81741 8.85269 4.82811 7.30835C5.8388 5.76401 7.32098 4.58716 9.05421 3.95282C10.7874 3.31848 12.6791 3.26053 14.4479 3.78761C16.2167 4.31469 17.7682 5.39862 18.8715 6.87821C19.9748 8.35779 20.571 10.154 20.5716 11.9997V12.8568C20.5716 13.5388 20.3007 14.1928 19.8184 14.6751C19.3362 15.1573 18.6821 15.4282 18.0001 15.4282C17.3182 15.4282 16.6641 15.1573 16.1819 14.6751C15.6996 14.1928 15.4287 13.5388 15.4287 12.8568V8.57108" stroke="#326B88" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
                        </svg>

                            <p>Email</p>
                        </div>
                        <a href="">main@domain.com</a>
                    </li>
                    <li className='flex justify-between'>
                        <div className='flex gap-2'>
                        <svg width="24" height="24" viewBox="0 0 44 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M22 27.5C18.975 27.5 16.5 25.025 16.5 22C16.5 18.975 18.975 16.5 22 16.5C25.025 16.5 27.5 18.975 27.5 22C27.5 25.025 25.025 27.5 22 27.5ZM38.5 22.55C38.5 12.5675 31.2125 5.5 22 5.5C12.7875 5.5 5.5 12.5675 5.5 22.55C5.5 28.985 10.8625 37.51 22 47.685C33.1375 37.51 38.5 28.985 38.5 22.55ZM22 0C33.55 0 44 8.855 44 22.55C44 31.68 36.6575 42.4875 22 55C7.3425 42.4875 0 31.68 0 22.55C0 8.855 10.45 0 22 0Z" fill="#9B51E0"/>
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