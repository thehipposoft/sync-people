import Image from 'next/image';
import React from 'react';

const DiscoverPlaces = () => {
    return (
        <div className='discover rounded-bl-[200px]'>
            <div className='pl-20 pt-24'>
                <h1>Discover Places</h1>
                <div className='grid grid-cols-4 py-20'>
                    <div className='flex flex-col w-[300px]'>
                        <Image src={'/assets/images/discover/discoverPlaces1.png'} className='rounded-2xl h-[245px]' alt='' width={300} height={290} />
                        <p className='text-white text-xl pt-4'>Sydney Opera House</p>
                        <p className='pt-4 text-white'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
                    </div>
                    <div className='flex flex-col w-[300px]'>
                        <Image src={'/assets/images/discover/discoverPlaces2.png'} className='rounded-2xl h-[245px]' alt='' width={300} height={290} />
                        <p className='text-white text-xl pt-4'>Blue Mountains</p>
                        <p className='pt-4 text-white'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
                    </div>
                    <div className='flex flex-col w-[300px]'>
                        <Image src={'/assets/images/discover/discoverPlaces3.png'} className='rounded-2xl h-[245px]' alt='' width={300} height={290} />
                        <p className='text-white text-xl pt-4'>Uluru</p>
                        <p className='pt-4 text-white'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
                    </div>
                    <div className='flex flex-col w-[300px]'>
                        <Image src={'/assets/images/discover/discoverPlaces4.png'} className='rounded-2xl h-[245px]' alt='' width={300} height={290} />
                        <p className='text-white text-xl pt-4'>The Great Barrier Reef</p>
                        <p className='pt-4 text-white'>Discover a world of career opportunities in the most exciting country on the planet . Get ready for a life-changing adventure!</p>
                    </div>
                </div>
                <div className='flex justify-end pr-10 pb-10'>
                    <Image src={'/assets/logo.png'} alt='Sync people logo' width={150} height={150}/>
                </div>
            </div>
        </div>
    );
};

export default DiscoverPlaces;