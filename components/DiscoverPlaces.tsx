import Image from 'next/image';
import React from 'react';

const DiscoverPlaces = ({isOpen, closeDiscover}:any) => {
    return (
        <div className={`${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} bg-[#8D78E0] h-screen w-full rounded-bl-[200px] fixed top-0 left-0 duration-1000 z-50`}>
            <div className='max-w-[1300px] mx-auto md:pl-0 pl-4 md:pt-[5vh] relative'>
                <div className='flex justify-between items-center py-4'>
                    <Image src={'/logo-white.svg'} alt='Logo in white' width={180} height={90} />
                    <p className='cursor-pointer text-3xl text-white' onClick={closeDiscover}>
                        &#8617;
                    </p>
                </div>
                <h2 className='text-6xl'>Discover Places</h2>
                <div className='grid grid-cols-1 md:grid-cols-4 py-8 gap-3'>
                    <div className='flex flex-col mb-4 md:mb-0'>
                        <Image src={'/assets/images/discover/sydney.webp'} className='rounded-2xl h-[245px] object-cover' alt='' width={320} height={290} />
                        <p className='text-white text-xl pt-4'>Sydney Opera House</p>
                        <p className='pt-4 text-white md:w-5/6'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
                    </div>
                    <div className='flex flex-col mb-4 md:mb-0'>
                        <Image src={'/assets/images/discover/discover-2.webp'} className='rounded-2xl h-[245px] object-cover' alt='' width={320} height={290} />
                        <p className='text-white text-xl pt-4'>Blue Mountains</p>
                        <p className='pt-4 text-white md:w-5/6'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
                    </div>
                    <div className='flex flex-col mb-4 md:mb-0'>
                        <Image src={'/assets/images/discover/discover-3.webp'} className='rounded-2xl h-[245px] object-cover' alt='' width={320} height={290} />
                        <p className='text-white text-xl pt-4'>Uluru</p>
                        <p className='pt-4 text-white md:w-5/6'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
                    </div>
                    <div className='flex flex-col mb-4 md:mb-0'>
                        <Image src={'/assets/images/discover/discover-4.webp'} className='rounded-2xl h-[245px] object-cover' alt='' width={320} height={290} />
                        <p className='text-white text-xl pt-4'>The Great Barrier Reef</p>
                        <p className='pt-4 text-white md:w-5/6'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverPlaces;
