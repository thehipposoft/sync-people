import Image from 'next/image';
import React from 'react';

const ProfileDashboard = () => {
    return (
        <div className='px-20 h-screen'>
            <div className='bg-slate-300 px-20 rounded-xl py-20'>
                <div className='flex justify-between'>
                    <div className='w-1/2 flex flex-col justify-end'>
                        <Image src={'/assets/logo.png'} alt='Sync-people logo' width={150} height={150} />
                        <p className='text-5xl blue'>Let's <strong>Sync</strong></p>
                    </div>
                    <div className='w-1/2 flex items-end justify-end'>
                        <h1>1.</h1>
                        <div className={`flex bg-[#FF8149] rounded-full rounded-bl-none h-[380px] w-[360px] ml-8`}>
                            <div className='flex flex-col justify-end relative left-12 bottom-16'>
                                <Image src={'/assets/images/mail.png'} alt='Y' width={45} height={45} />
                                <p className='text-white '>Upload a picture.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-20'>
                    <p className='text-3xl'>What theme would you like to start with?</p>
                    <div className='grid grid-cols-4 pt-10 gap-8'>
                        <div className='bg-white py-2 flex flex-col justify-center items-center w-[280px] h-[180px] rounded-lg shadow-xl'>
                            <Image src={'/assets/images/mail.png'} alt='icon' width={50} height={50} />
                            <p className='text-center'>Education and work experience</p>
                        </div>
                        <div className='bg-white py-2 flex flex-col justify-center items-center w-[280px] h-[180px] rounded-lg shadow-xl'>
                            <Image src={'/assets/images/mail.png'} alt='icon' width={50} height={50} />
                            <p className='text-center'>Location, schedule and preferences</p>
                        </div>
                        <div className='bg-white py-2 flex flex-col justify-center items-center w-[280px] h-[180px] rounded-lg shadow-xl'>
                            <Image src={'/assets/images/mail.png'} alt='icon' width={50} height={50} />
                            <p className='text-center'>Visa and Paperwork</p>
                        </div>
                        <div className='bg-white py-2 flex flex-col justify-center items-center w-[280px] h-[180px] rounded-lg shadow-xl'>
                            <Image src={'/assets/images/mail.png'} alt='icon' width={50} height={50} />
                            <p className='text-center'>Extras</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDashboard;