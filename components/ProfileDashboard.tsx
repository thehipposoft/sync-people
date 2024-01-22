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
                <div className='bg-[#EBEFFF] p-20 rounded-sm'>
                    <div className='flex justify-between'>
                        <div className='w-1/2 flex flex-col justify-end'>
                            <Image src={'/assets/logo.png'} alt='Sync-people logo' width={150} height={150} />
                            <p className='text-5xl blue'>Let's <strong>Sync</strong></p>
                        </div>
                        <div className='w-1/2 flex items-end justify-end'>
                            <h1>1.</h1>
                            <div className={`flex bg-[#FF8149] rounded-full rounded-bl-none h-[380px] w-[360px] ml-8`}>
                                <div className='flex flex-col justify-end relative left-12 bottom-16'>
                                    <label className="text-white font-semibold cursor-pointer">
                                        <Image className='pb-2' src={'/assets/images/vectors/upload.svg'} alt='Y' width={45} height={45} />
                                        <input type="file" className='hidden'/>
                                        Upload a picture.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-20'>
                        <p className='text-3xl blue'>What theme would you like to start with?</p>
                        <div className='grid grid-cols-4 pt-10 gap-8'>
                            <div 
                                className='bg-white py-2 flex flex-col justify-center items-center w-[270px] h-[180px] rounded-lg shadow-xl duration-300 hover:-translate-y-4'
                                onClick={() => {
                                    setIndex(0)
                                    toggleModal()
                                }}

                            >
                                <Image src={'/assets/images/vectors/education.svg'} alt='icon' width={50} height={50} className='pt-4 min-h-[80px]'/>
                                <p className='text-center pt-3 w-1/2 min-h-[64px]'>Education and work experience</p>
                            </div>
                            <div 
                                className='bg-white py-2 flex flex-col justify-center items-center w-[270px] h-[180px] rounded-lg shadow-xl duration-300 hover:-translate-y-4'
                                onClick={() => {
                                    setIndex(1)
                                    toggleModal()
                                }}
                            >
                                <Image src={'/assets/images/vectors/location.svg'} alt='icon' width={50} height={50} className='pt-4 min-h-[80px]'/>
                                <p className='text-center pt-3 w-1/2 min-h-[64px]'>Location, schedule and preferences</p>
                            </div>
                            <div 
                                className='bg-white py-2 flex flex-col justify-center items-center w-[270px] h-[180px] rounded-lg shadow-xl duration-300 hover:-translate-y-4'
                                onClick={() => {
                                    setIndex(2)
                                    toggleModal()
                                }}
                            >
                                <Image src={'/assets/images/vectors/visa.svg'} alt='icon' width={50} height={50} className='pt-4 min-h-[80px]'/>
                                <p className='text-center pt-3 w-2/3 min-h-[64px]'>Visa and Paperwork</p>
                            </div>
                            <div 
                                className='bg-white py-2 flex flex-col justify-center items-center w-[270px] h-[180px] rounded-lg shadow-xl duration-300 hover:-translate-y-4'
                                    onClick={() => {
                                    setIndex(3)
                                    toggleModal()
                                }}
                            >
                                <Image src={'/assets/images/vectors/extras.svg'} alt='icon' width={50} height={50} className='pt-4 min-h-[80px]'/>
                                <p className='text-center pt-3 w-2/3 min-h-[64px]'>Extras</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FormModal isOpen={open} closeMenu={toggleModal} currentIndexProp={currentIndexChange}/>
        </div>    
    );
};

export default ProfileDashboard;