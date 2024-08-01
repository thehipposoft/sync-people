'use client'
import Image from 'next/image';
import React, {useState} from 'react';
import FormModal from './FormModal';

const ProfileDashboard = () => {

    const [open, setOpenModal] = useState<boolean>(false);

    const [currentIndexChange, setCurrentIndexChange] = useState<number>(0);

    function toggleModal() {
        setOpenModal(!open);
    }

    function setIndex(index:any) {
        setCurrentIndexChange(index);
    }

    return (
        <div className=''>
            <div className='px-20'>
                <div className='bg-[#ebefff6e] px-20 py-4 rounded-sm'>
                    <div className='flex flex-col'>
                        <div className='w-[300px] h-[125px] relative'>
                            <Image src={'/assets/logo.svg'} alt='Sync-people logo' fill />
                        </div>
                        <p className='text-xl text-[#1A335D] font-light'>Connecting Companies to <strong>Talents,</strong></p>
                        <p className='text-xl text-[#1A335D] font-light'>and Job Seekers to <strong>Opportunities</strong></p>
                    </div>
                    <div className='pt-12'>
                        <p className='text-3xl blue'>Let's <strong>Start.</strong></p>
                        <p className='text-xl text-[#1A335D]'>These are the topics of the form</p>
                        <div className='grid grid-cols-4 pt-10 gap-8'>
                            <div 
                                className='bg-white py-2 flex flex-col justify-center items-center w-[270px] h-[180px] rounded-lg shadow-xl duration-300 hover:-translate-y-4'
                                onClick={() => {
                                    setIndex(0)
                                    toggleModal()
                                }}

                            >
                                <Image src={'/assets/images/vectors/user.svg'} alt='icon' width={50} height={50} className='pt-4 min-h-[80px]'/>
                                <p className='text-center pt-3 text-[#1A335D] min-h-[64px]'>Basic Information</p>
                            </div>
                            <div 
                                className='bg-white py-2 flex flex-col justify-center items-center w-[270px] h-[180px] rounded-lg shadow-xl duration-300 hover:-translate-y-4'
                                onClick={() => {
                                    setIndex(1)
                                    toggleModal()
                                }}
                            >
                                <Image src={'/assets/images/vectors/time.svg'} alt='icon' width={50} height={50} className='pt-4 min-h-[80px]'/>
                                <p className='text-center pt-3 min-h-[64px] text-[#1A335D]'>Schedule and preferences</p>
                            </div>
                            <div 
                                className='bg-white py-2 flex flex-col justify-center items-center w-[270px] h-[180px] rounded-lg shadow-xl duration-300 hover:-translate-y-4'
                                onClick={() => {
                                    setIndex(2)
                                    toggleModal()
                                }}
                            >
                                <Image src={'/assets/images/vectors/industry.svg'} alt='icon' width={50} height={50} className='pt-4 min-h-[80px]'/>
                                <p className='text-center pt-3 text-[#1A335D] min-h-[64px]'>Industry</p>
                            </div>
                            <div 
                                className='bg-white py-2 flex flex-col justify-center items-center w-[270px] h-[180px] rounded-lg shadow-xl duration-300 hover:-translate-y-4'
                                    onClick={() => {
                                    setIndex(3)
                                    toggleModal()
                                }}
                            >
                                <svg width="48" height="65" viewBox="0 0 48 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.7 3H9.3C5.82061 3 3 5.8302 3 9.32143V55.6786C3 59.1698 5.82061 62 9.3 62H38.7C42.1794 62 45 59.1698 45 55.6786V9.32143C45 5.8302 42.1794 3 38.7 3Z" stroke="#1A335D" stroke-width="5" stroke-linejoin="round"/>
                                    <path d="M18 9H30" stroke="#1A335D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M34.3683 36.6353C33.8731 36.1099 33.2733 35.6932 32.6072 35.4117C31.9412 35.1302 31.2235 34.9902 30.5 35.0005C28.9779 35.0005 27.6014 35.5768 26.6239 36.6249C25.6463 37.6729 25.1542 39.1234 25.2671 40.6759C25.4915 43.7442 27.8389 46.2388 30.5 46.2388C33.1611 46.2388 35.5046 43.7442 35.7316 40.6785C35.8471 39.1391 35.3616 37.703 34.3683 36.6353ZM39.382 57.9998H21.618C21.3867 58.0035 21.1575 57.9566 20.9464 57.8624C20.7353 57.7683 20.5475 57.6292 20.3963 57.4549C20.2324 57.2593 20.1147 57.0295 20.052 56.7825C19.9893 56.5354 19.9832 56.2776 20.0342 56.0279C20.4606 53.7332 21.7898 51.8057 23.8788 50.4532C25.7342 49.2522 28.0856 48.591 30.5 48.591C32.9144 48.591 35.2658 49.2522 37.1212 50.4532C39.2102 51.8057 40.5394 53.7332 40.9658 56.0279C41.0168 56.2776 41.0107 56.5354 40.948 56.7825C40.8853 57.0295 40.7676 57.2593 40.6037 57.4549C40.4525 57.6292 40.2647 57.7683 40.0536 57.8624C39.8425 57.9566 39.6133 58.0035 39.382 57.9998Z" fill="#1A335D"/>
                                </svg>
                                <p className='text-center pt-3 text-[#1A335D] min-h-[64px]'>Personal Documentation</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end mt-16'>
                        <button className='purple-b px-6 py-2 rounded-3xl'>Start</button>
                    </div>
                </div>
            </div>
            <FormModal isOpen={open} closeMenu={toggleModal} currentIndexProp={currentIndexChange}/>
        </div>    
    );
};

export default ProfileDashboard;